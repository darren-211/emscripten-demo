import { loadWasmModule } from './loader.js';

/**
 * 加载wasm模块
 * @returns {Promise<TestModule>}
 */
export async function loadModule(){
    console.time('wasm loaded');
    const Module = await loadWasmModule('/wasm/test');
    console.timeEnd('wasm loaded');

    ['Vector', 'Int8Array', 'Uint8Array', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Int64Array', 'Uint64Array', 'Float32Array', 'Float64Array', 'PointArray'].forEach(ctor => {
        Module[ctor].prototype[Symbol.iterator] = function CPPIterator() {
            const _self = this;
            const _len = _self.size();
            let _idx = 0;
            return {
                next() {
                    return (_idx < _len) ?
                        { value: _self.get(_idx++), done: false } :
                        { done: true };
                }
            }
        }
        Module[ctor].fromIterable = function (iterable) {
            const vec = new Module[ctor]();
            for (let v of iterable) {
                vec.push_back(v);
            }
            return vec;
        };

    });

    return Module;
}

const ASYNC_TEST_MODULE = loadModule();

export default ASYNC_TEST_MODULE;
