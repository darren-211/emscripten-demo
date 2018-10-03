export as namespace base;

export type int8 = number;
export type uint8 = number;
export type int16 = number;
export type uint16 = number;
export type int32 = number;
export type uint32 = number;
export type int64 = number;
export type uint64 = number;
export type float32 = number;
export type float64 = number;
export type size_t = uint32;
export type bool = boolean;

export class Vector<T> extends Iterable<T> {
    /**
     * 通过迭代器创建Vector
     * @param iterable 可迭代对象
     */
    static fromIterable(iterable: Iterable<T>): Vector<T>;
    /**
     * 计算容器大小
     */
    size(): size_t;
    /**
     * 给某项赋值
     * @param index 下标索引
     * @param value 值
     */
    set(index: size_t, value: T): void;
    /**
     * 获取某项的值
     * @param index 下标索引
     */
    get(index: size_t): T;
    /**
     * 从尾部追加值
     * @param value 值
     */
    push_back(value: T): void;
    /**
     * 修改容器大小
     * @param size 容器大小
     * @param value 默认填充值
     */
    resize(size: size_t, value: T): void;
    /**
     * 拷贝
     */
    clone(): Vector<T>;
    /**
     * 回收内存
     */
    delete(): void;
    /**
     * 回收内存（异步）
     */
    deleteLater(): void;
    /**
     * 内存是否已经回收
     */
    isDeleted(): bool;
}

export class Int8Array extends Vector<int8> { }
export class Uint8Array extends Vector<uint8> { }
export class Int16Array extends Vector<int16> { }
export class Uint16Array extends Vector<uint16> { }
export class Int32Array extends Vector<int32> { }
export class Uint32Array extends Vector<uint32> { }
export class Int64Array extends Vector<int64> { }
export class Uint64Array extends Vector<uint64> { }
export class Float32Array extends Vector<float32> { }
export class Float64Array extends Vector<float64> { }
