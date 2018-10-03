#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <string>
#include <cmath>
#include <vector>
#include "type.h"
using namespace emscripten;

struct Point2f
{
    double x;
    double y;
};

struct Rect
{
    Point2f lt;
    Point2f br;
};

Point2f calcRectCenter(Rect rect)
{
    struct Point2f ctr;
    Point2f lt = rect.lt;
    Point2f br = rect.br;
    ctr.x = (lt.x + br.x) / 2;
    ctr.y = (lt.y + br.y) / 2;
    return ctr;
}

double calcRectArea(Rect rect)
{
    double area;
    double l = std::abs(rect.lt.x - rect.br.x);
    double h = std::abs(rect.lt.y - rect.br.y);
    return l * h;
}

Rect calcColliRect(Rect rec1, Rect rec2)
{
    Point2f lt, br;
    Rect rect;
    lt.x = std::max(rec1.lt.x, rec2.lt.x);
    lt.y = std::max(rec1.lt.y, rec2.lt.y);
    br.x = std::min(rec1.br.x, rec2.br.x);
    br.y = std::min(rec1.br.y, rec2.br.y);
    rect.lt = lt;
    rect.br = br;
    return rect;
}

Point2f calcPtsCenter(std::vector<Point2f> vec) {
    Point2f center;
    size_t size = vec.size();
    for(size_t i = 0; i < size; i ++) {
        center.x += vec[i].x;
        center.y += vec[i].y;
    }
    center.x /= size;
    center.y /= size;
    return center;
}

std::vector<Point2f> genPoint2fVec(std::vector<double> vec) {
    std::vector<Point2f> pts;
    size_t len = vec.size();
    for(size_t i = 0; i < len; i+=2 ) {
        Point2f pt;
        pt.x = vec[i];
        pt.y = vec[i+1];
        pts.push_back(pt);
    }
    return pts;
}

struct Person {
    std::string name;
    uint8_t age;
};

Person createPerson(std::string first, std::string last, uint8_t age) {
    Person p;
    p.name = first + ' ' + last;
    p.age = age;
    return p;
}