/**
 * dom 元素是否获取焦点
 *
 * @param {Element} element    dom 元素
 */
export default function hasFocus(element) {
  // $(element).is(':focus')    jQuery
  // document.hasFocus()    判断文档是否获取焦点
  return document.activeElement === element
}
