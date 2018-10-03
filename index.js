import ASYNC_TEST_MODULE from './js/@test_module.js';
(async () => {
    // 加载异步模块
    const start = Date.now();
    const Module = await ASYNC_TEST_MODULE;
    const end = Date.now();
    window.Module = Module;
    console.log('wasm模块已成功加载，通过window.Module即可访问:', Module);
    var div = document.createElement('div');
    div.style.cssText = 'margin-top:50px;font-size:24px;text-align:center;line-height:48px;color:#0086cd;';
    div.innerHTML = `历经${end - start}ms, wasm模块加载成功。<br>打开你的浏览器Console，开始尽情地玩耍吧！`;
    document.body.appendChild(div);

    // 测试用例
    const {calcRectCenter, calcRectArea, calcColliRect, calcPtsCenter, genPoint2fVec, createPerson, PointArray, Float64Array} = Module;
    console.log('calcRectCenter({lt: [0, 0], br: [100, 100]}):', calcRectCenter({lt: [0, 0], br: [100, 100]}));
    console.log('calcRectArea({lt: [0, 0], br: [100, 100]}):', calcRectArea({lt: [0, 0], br: [100, 100]}));
    console.log('calcColliRect({lt: [0, 0], br: [100, 100]}, {lt: [50, 50], br: [150, 150]}):', calcColliRect({lt: [0, 0], br: [100, 100]}, {lt: [50, 50], br: [150, 150]}));
    console.log('calcPtsCenter(PointArray.fromIterable([[0,0],[50,50],[100,100],[150,150]])):', calcPtsCenter(PointArray.fromIterable([[0,0],[50,50],[100,100],[150,150]])));
    console.log('genPoint2fVec(Float64Array.fromIterable([0,0,50,50,100,100,150,150])):',genPoint2fVec(Float64Array.fromIterable([0,0,50,50,100,100,150,150])));
    console.log('createPerson("测试", "Test", 18):', createPerson("测试", "Test", 18));
})();