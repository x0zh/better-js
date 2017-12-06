import {
    DATE_FORMAT, 
    LANG, 
    ZH_WEEK, 
    EN_WEEK, 
    ZH_MERIDIEM, 
    EN_MERIDIEM
} from './date/utils';

/**
 * 获取指定月份的天数
 * <p> 不传参数则返回当前月份的天数，非法日期返回 0
 * @author devin
 * @since 0.0.1
 * @param {string | date | number} date  new Date() default (optional)
 * @return 天数
 * @example
 * 
 * getDaysInMonth(new Date('2017-8'))
 * // => 31
 */
export function getDaysInMonth(date) {
    if (!date) {
        let d = new Date();
        return getDaysInMonth(d);
    }
    
    let d = new Date(date);
    if (isNaN(d)) {
        return 0;
    }
    d = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    return d.getDate();
}

/**
 * 格式化时间
 * @author devin
 * @since 0.0.1
 * @param {string | date | number} date (required)
 * @param {string} format 'yyyy-MM-dd HH:mm:ss' default (optional)
 *         完整格式 'yyyy-MM-dd E HH:mm:ss.S a' ---> '2017-08-02 WED 23:38:12.256'
 * @param {string} lang zh_CN default (optional)
 */
export function formatDate(date, format, lang) {
    if (!date) {
        return '';
    }

    let d = new Date(date);
    if (isNaN(d)) {
        return '';
    }

    let fmt = format || DATE_FORMAT,
        language = lang || LANG,
        week = language === LANG ? ZH_WEEK : EN_WEEK,
        meridiem = language === LANG ? ZH_MERIDIEM : EN_MERIDIEM;

    let patternObj = {
        'M+': d.getMonth() + 1,
        'd+': d.getDate(),
        'h+': d.getHours() % 12 === 0 ? 12 : d.getHours() % 12,
        'H+': d.getHours(),
        'm+': d.getMinutes(),
        's+': d.getSeconds(),
        'S': d.getMilliseconds()
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, 
            (d.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for(let p in patternObj) {
        if (new RegExp('(' + p + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, 
                (RegExp.$1.length === 1) ? 
                patternObj[p] : 
                ('00' + patternObj[p]).substr(('' + patternObj[p]).length));
        }
    }

    if (/(E)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, week[d.getDay()]);
    }

    if (/(a)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, d.getHours() < 12 ? meridiem[0] : meridiem[1]);
    }
    return fmt;
}