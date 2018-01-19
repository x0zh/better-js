/**
 * 比较两个数组是否相等
 * <pre>
 *   arrayEqual()                  // => true
 *   arrayEqual([1])               // => false
 *   arrayEqual([1], [1, 2])       // => false
 *   arrayEqual([1, 2], [1, 2])    // => true
 * </pre>
 * @param {Array} lth
 * @param {Array} rth
 */
export default function arrayEqual(lth, rth) {
  if (lth === rth) return true
  if (lth == null || rth == null) return false
  if (lth.length !== rth.length) return false
  for (let i = 0; i < lth.length; i++) {
    if (lth[i] !== rth[i]) return false
  }
  return true
}
