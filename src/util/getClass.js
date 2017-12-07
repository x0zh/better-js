/**
 * 获取对象的类型
 * <pre>
 * getClass(null)             // => Null
 * getClass(undefined)        // => Undefined
 * getClass(1)                // => Number
 * getClass("1")              // => String
 * getClass(false)            // => Boolean
 * getClass({})               // => Object
 * getClass([])               // => Array
 * getClass(/./)              // => RegExp
 * getClass(new Date())       // => Date
 * getClass(function() {})    // => Function
 * </pre>
 * @param {*} object          待测试的对象
 * @return {String}           类型对应类型的字符串
 */
export default function getClass(object) {
    if (object === undefined) return "Undefined";
    if (object === null) return "Null";
    return Object.prototype.toString.call(object).slice(8, -1);
}