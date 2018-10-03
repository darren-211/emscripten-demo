export as namespace TestModule;

export * from './loader';

import {
    int8, int16, int32, int64, uint8, uint16, uint32, uint64, float32, float64,
    Vector, Int8Array, Int16Array, Int32Array, Int64Array, Uint8Array, Uint16Array, Uint32Array, Uint64Array, Float32Array, Float64Array
} from './base';

import { wasmBinary, onAbort, onRuntimeInitialized } from './emmodule';

export {
    int8, int16, int32, int64, uint8, uint16, uint32, uint64, float32, float64,
    Vector, Int8Array, Int16Array, Int32Array, Int64Array, Uint8Array, Uint16Array, Uint32Array, Uint64Array, Float32Array, Float64Array,
    wasmBinary, onAbort, onRuntimeInitialized
};

type Point2f = [float64, float64];
interface Rect {
    lt: [float64, float64];
    br: [float64, float64];
}
interface Person {
    name: string;
    age: uint8;
}

export class PointArray extends Vector<Point2f> {}

export function calcRectCenter(rect: Rect): Point2f;
export function calcRectArea(rect: Rect): float64;
export function calcColliRect(rect1: Rect, rect2: Rect): Rect;
export function calcPtsCenter(pts: Vector<Point2f>): Point2f;
export function genPoint2fVec(vec: Float64Array): Vector<Point2f>;
export function createPerson(first: string, last: string, age: uint8): Person;