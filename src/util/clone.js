/**
 * 深拷贝对象
 * <pre>
 *   clone()                    // => undefined
 *   clone(1)                   // => 1
 *   clone(new Date())          // => new Date()
 *   clone(['1', '2'])          // => ['1', '2']
 *   clone({a: 'A', b: 'B'})    // => {a: 'A', b: 'B'}
 * </pre>
 * @param {*} object    被拷贝的对象
 */
export default function clone(object) {
    let copy;
    // 处理 null/undefined 以及非 object
    if (object == null || typeof object !== 'object') {
        return object;
    }
    // 处理时间对象
    if (object instanceof Date) {
        copy = new Date();
        copy.setTime(object.getTime());
        return copy;
    }
    // 处理数组
    if (object instanceof Array) {
        copy = [];
        for (let i = 0, length = object.length; i < length; i++) {
            copy[i] = clone.call(this, object[i]);
        }
        return copy;
    }
    // 处理其他对象
    copy = {};
    for (let name in object) {
        if (object.hasOwnProperty(name)) {
            copy[name] = clone.call(this, object[name]);
        }
    }
    return copy;
}