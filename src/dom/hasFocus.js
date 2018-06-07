import isParent from './isParent'

/**
 * 元素是否获取焦点
 *
 * @param {Node} element    dom 元素
 */
export default function hasFocus(element) {
  if (!(element instanceof Node)) return false

  // $(element).is(':focus')    jQuery
  // document.hasFocus()    判断文档是否获取焦点
  return isParent(document.activeElement, element)
}
