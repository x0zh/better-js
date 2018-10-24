import isParent from './isParent'

/**
 * 删除元素
 *
 * 指定删除的元素和父元素可以是 Node 对象，也可以是 CSS 选择器
 *
 * @param {Node | String} childNode 指定删除的元素
 * @param {Node | String} parentNode 父元素，不指定则为 document
 * @param {boolean} isAll 是否全部删除
 * @returns 被删除的元素
 */
export default function removeNode(childNode, parentNode, isAll) {
  let parent, child, children, removedChildren = []

  if (!childNode) return

  if (!parentNode) {
    parent = document
  } else if (parentNode instanceof Node) {
    parent = parentNode
  } else if (typeof parentNode === 'string') {
    parent = document.querySelector(parentNode)
  }
  if (!parent) return

  if (childNode instanceof Node) {
    child = childNode
    if (isParent(child, parent)) return child.parentNode.removeChild(child)
    return
  }

  // 指定的子元素是一个普通数组
  if (childNode instanceof Array) {
    children = childNode
    children.forEach(function(v, i) {
      child = removeNode(v, parent, isAll)
      if (child) {
        if (child instanceof Array) {
          removedChildren = removedChildren.concat(child)
        } else {
          removedChildren.push(child)
        }
      }
    })
    return removedChildren
  }

  // 指定的子元素是节点数组
  if (childNode instanceof NodeList) {
    children = childNode
    children.forEach(function(v, i) {
      child = removeNode(v, parent, isAll)
      if (child) removedChildren.push(child)
    })
    return removedChildren
  }

  if (typeof childNode !== 'string') return

  // 删除父元素下指定的所有子元素
  if (!isAll) {
    child = parent.querySelector(childNode)
    if (!child) return
    return child.parentNode.removeChild(child)
  }

  // 删除父元素下指定的第一个子元素
  children = parent.querySelectorAll(childNode)
  if (!children || !children.length) return
  children.forEach(function(v, i) {
    child = v.parentNode.removeChild(v)
    if (child) removedChildren.push(child)
  })
  return removedChildren
}
