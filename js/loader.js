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
    const wasmLoader = loadFile(wasmURL, 'arrayBuffer');
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
 * @param {string} jsURL 
 * @param {string} wasmURL
 * @return {Promise<EMModule>}
 */
export function loadWasmJS(jsURL, wasmURL) {
    return new Promise((resolve, reject) => {
        loadWasmJSByCallback(jsURL, wasmURL, resolve, reject);
    });
}