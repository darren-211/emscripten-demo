import { loadFile, loadWasmJS } from './loader.js';

const ASYNC_TEST_MODULE = (async () => {
    console.time('wasm loaded');
    const Module = await loadWasmJS('/wasm/main.js', '/wasm/main.wasm');
    console.timeEnd('wasm loaded');

    ['Vector', 'Int8Array', 'Uint8Array', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Int64Array', 'Uint64Array', 'Float32Array', 'Float64Array'].forEach(ctor => {
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
        Module[ctor].fromIterator = function (iterator) {
            const vec = new Module[ctor]();
            for (let v of iterator) {
                vec.push_back(v);
            }
            return vec;
        };

    });

    return Module;
})();

export default ASYNC_TEST_MODULE;
