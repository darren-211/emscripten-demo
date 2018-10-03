/**
 * 加载文件
 * @param {string} url 文件路径
 * @param {'text' | 'blob' | 'arrayBuffer'} type 文件类型
 * @returns {Promise<string | Blob | ArrayBuffer>}
 */
export function loadFile(url, type = 'text') {
    return fetch(url, { credentials: 'same-origin' })
        .then(response => response[type]())
}

/**
 * 加载wasm模块
 * @param {string} url 文件路径
 * @param {*} imports 初始化参数
 */
export function loadWebAssembly(url, imports = {}) {
    return loadFile(url, 'arrayBuffer')
        .then(buffer => WebAssembly.compile(buffer))
        .then(module => {
            imports.env = imports.env || {};
            // 开辟内存空间
            imports.env.memoryBase = imports.env.memoryBase || 0;
            if (!imports.env.memory) {
                imports.env.memory = new WebAssembly.Memory({ initial: 256 });
            }

            // 创建变量映射表
            imports.env.tableBase = imports.env.tableBase || 0;
            if (!imports.env.table) {
                // 在MVP版本中element只能是'anyfunc'
                imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });
            }
            return new WebAssembly.Instance(module, imports);
        });
}

/**
 * 加载wasm模块加载器(js文件)，回调方式
 * @param {string} jsURL wasm加载器url
 * @param {string} wasmURL wasm文件url
 * @param {(module: EMModule) => any} successCB 
 * @param {(error: any) => any} errorCB 
 */
export function loadWasmJSByCallback(jsURL, wasmURL, successCB, errorCB) {
    const jsLoader = loadFile(jsURL, 'text').then(code => new Function('imports', `var Module=imports;${code};return Module;`));
    const wasmLoader = wasmURL && loadFile(wasmURL, 'arrayBuffer');
    Promise.all([jsLoader, wasmLoader])
        .then(([factory, wasmBinary]) => {
            const Module = wasmBinary ? { wasmBinary } : {};
            Module.onRuntimeInitialized = () => {
                successCB && successCB(Module);
            };
            Module.onAbort = error => {
                errorCB && errorCB(error);
            };
            factory(Module);
        }).catch(error => {
            errorCB && errorCB(error);
        });
}

/**
 * 加载wasm模块加载器(js文件)，Promise方式
 * @param {string} fileKey
 * @return {Promise<EMModule>}
 */
export function loadWasmJS(fileKey) {
    const jsURL = fileKey + '.js';
    const wasmURL = fileKey + '.wasm';
    return new Promise((resolve, reject) => {
        loadWasmJSByCallback(jsURL, wasmURL, resolve, reject);
    });
}

/**
 * 加载wasm模块，返回Promise，自动检测浏览器是否支持WebAssembly
 * 若支持WebAssembly则加载 `${fileKey}.js`（依赖`${fileKey}.wasm`)
 * 否则加载`${fileKey}.asm.js`
 * @param {string} fileKey 
 * @returns {Promise<EMModule>}
 */
export function loadWasmModule(fileKey) {
    if (window.WebAssembly) {
        return loadWasmJS(fileKey);
    } else {
        const asmURL = fileKey + '.asm.js';
        return new Promise((resolve, reject) => {
            loadWasmJSByCallback(asmURL, undefined, resolve, reject);
        });
    }
}