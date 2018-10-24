/**
 * 判断 parent 是否是 child 的父节点。
 *
 * @param {Node} child     子节点
 * @param {Node} parent    父节点
 */
export default function isParent(child, parent) {
  // Element, Text, Comment 继承 Node
  if (!(child instanceof Node)) return false
  if (!(parent instanceof Node)) return false

  while (child !== undefined && child !== null) {
    if (child === parent) return true

    // parentNode 是 W3C 标准规范中定义的一个属性，返回该节点的父节点。
    // parentElement 当父节点不是 Element 时，返回 null。
    child = child.parentNode
  }
  return false
}
