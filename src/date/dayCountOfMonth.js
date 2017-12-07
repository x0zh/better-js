import getClass from '../util/getClass';
import isValidDate from './isValidDate';

/**
 * 获取指定月份的天数
 * <pre>
 *   dayCountOfMonth(new Date('2017-12'))    // => 31
 *   dayCountOfMonth()                       // => dayCountOfMonth(new Date())
 *   dayCountOfMonth('2017/12/07 15:61:20')  // => 0
 * </pre>
 * @param {string|date|number} _date  可以是时间格式的字符串，时间对象或者时间戳，
 *                                    可选参数，默认为当前月份
 * @return                            指定月份的天数，非法日期返回 0
 */
export default function dayCountOfMonth(_date) {
    if (!_date) {
        let date = new Date();
        return dayCountOfMonth(date);
    }
    
    let date = getClass(_date) === 'Date' ? _date : new Date(_date);
    if (!isValidDate(date)) {
        return 0;
    }
    date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return date.getDate();
}