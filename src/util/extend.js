/**
 * 实现 JQuery.extend() 方法
 * <pre>
 *  extend()              // => {}
 *  extend({}, {a: 1})    // => {a: 1}
 *  extend(true, {a: {b: 2}, array: [3, 4]}, {a: {b: 1}, array: [1, 2]})  // => {a: {b: 1}, array: [1, 2]}
 * </pre>
 * 
 * @param {*} object    参数个数不限
 */
export default function extend(object) {
  let options, name, src, copy, clone,
    target, i, length, deep

  target = arguments[0] || {}
  length = arguments.length
  deep = false
  i = 1

  // 如果第一个参数是布尔型，则表示是否是深拷贝
  if (typeof arguments[0] === 'boolean') {
    deep = target
    target = arguments[1] || {}
    i = 2
  }

  // 当目标不是对象的时候
  if (typeof target !== 'object') {
    target = {}
  }

  // 当没有参数或只有一个参数（不算深拷贝的参数）时，直接返回
  if (length <= i) {
    return target
  }

  for (; i < length; i++) {
    // 排除 null/undefined 参数
    if ((options = arguments[i]) == null) {
      continue
    }
    for (name in options) {
      // 排除非自有属性
      if (!options.hasOwnProperty(name)) {
        continue
      }
      src = target[name]
      copy = options[name]

      // 排除 undefined
      if (copy === undefined) {
        continue
      }
      // 防止死循环
      if (target === copy) {
        continue
      }

      // 深拷贝
      if (deep) {
        // 处理 null 或非对象
        if (copy === null || typeof copy !== 'object') {
          target[name] = copy
        } else if (copy instanceof Date) {
          target[name] = new Date()
          target[name].setTime(copy.getTime())
        } else if (copy instanceof Array) {
          clone = src && src instanceof Array ? src : []
          target[name] = extend.call(this, deep, clone, copy)
        } else {
          clone = src && typeof src === 'object' ? src : {}
          target[name] = extend.call(this, deep, clone, copy)
        }
      } else {
        target[name] = copy
      }
    }
  }
  return target
}
