import {
  DATE_FORMAT,
  LANG,
  ZH_WEEK,
  EN_WEEK,
  ZH_MERIDIEM,
  EN_MERIDIEM
} from '../util/const'

import isValidDate from './isValidDate'

/**
 * 格式化时间
 * @param {string|date|number} _date    可以是时间格式的字符串，时间对象或者时间戳
 * @param {string} _format              可选参数，默认为 'yyyy-MM-dd HH:mm:ss'
 *                                      'yyyy-MM-dd E HH:mm:ss.S a' => '2017-08-02 WED 23:38:12.256'
 * @param {string} _lang                可选参数，默认为 'zh_CN'
 * @returns                             返回格式化后的时间字符串，非法日期返回空字符串
 */
export default function formatDate(_date, _format, _lang) {
  let date, fmt, language, week, meridiem, patternObj

  if (!_date) {
    return ''
  }

  date = _date instanceof Date ? _date : new Date(_date)
  if (!isValidDate(date)) {
    return ''
  }

  fmt = _format || DATE_FORMAT
  language = _lang || LANG
  week = language === LANG ? ZH_WEEK : EN_WEEK
  meridiem = language === LANG ? ZH_MERIDIEM : EN_MERIDIEM
  patternObj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours() === 12 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'S': date.getMilliseconds()
  }

  // 格式化年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  // 格式化月份至毫秒
  for (let p in patternObj) {
    if (new RegExp('(' + p + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1,
        (RegExp.$1.length === 1)
          ? patternObj[p]
          : ('00' + patternObj[p]).substr(('' + patternObj[p]).length))
    }
  }

  // 格式化星期
  if (/(E)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, week[date.getDay()])
  }

  // 格式化上午/下午
  if (/(a)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getHours() < 12 ? meridiem[0] : meridiem[1])
  }
  return fmt
}
