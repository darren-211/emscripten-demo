#include "test.cpp"

/**
 * 通过embind导出c++数据结构与方法
 */
EMSCRIPTEN_BINDINGS(my_value_example)
{
    // 用vector模拟js的TypedArray和Array
    register_vector<int8_t>("Int8Array");
    register_vector<u_int8_t>("Uint8Array");
    register_vector<int16_t>("Int16Array");
    register_vector<u_int16_t>("Uint16Array");
    register_vector<int32_t>("Int32Array");
    register_vector<u_int32_t>("Uint32Array");
    register_vector<int64_t>("Int64Array");
    register_vector<u_int64_t>("Uint64Array");
    register_vector<float>("Float32Array");
    register_vector<double>("Float64Array");
    register_vector<val>("Vector");

    // 用map模拟js的Object和Map
    // register_map<std::string, val>("Object");
    // register_map<val, val>("Map");

    // embind:value_array测试
    value_array<Point2f>("Point2f")
        .element(&Point2f::x)
        .element(&Point2f::y);
    // embind:value_object测试
    value_object<Rect>("Rect")
        .field("lt", &Rect::lt)
        .field("br", &Rect::br);
    // 点集vector
    register_vector<Point2f>("PointArray");
    // embind:function导出方法
    function("calcRectCenter", &calcRectCenter);
    function("calcRectArea", &calcRectArea);
    function("calcColliRect", &calcColliRect);
    function("calcPtsCenter", &calcPtsCenter);
    function("genPoint2fVec", &genPoint2fVec);
    // c++ string与js string通信测试
    value_object<Person>("Person")
        .field("name", &Person::name)
        .field("age", &Person::age);
    function("createPerson", &createPerson);
}