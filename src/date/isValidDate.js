/**
 * 校验是否是合法的时间
 * <pre>
 *   isValidDate('2017/12/07 24:00:00')   // => false
 *   isValidDate('2017/12/07 10:47:35')   // => true
 *
 *   isValidDate(new Date('2017-13-01'))  // => false
 *   isValidDate(new Date('2017-12-07'))  // => true
 * </pre>
 * @param {*} _date    待校验的对象
 * @returns            是合法时间返回 true，否则返回 false
 */
export default function isValidDate(_date) {
  let date = _date instanceof Date ? _date : new Date(_date)
  return !isNaN(date)
}
