/**
 * -------------------------------
 * data.js
 * <p> 提供了操作 `Date` 的相关功能
 * @author devin
 * -------------------------------
 */

!((window) => {
    let self = window;
    const DEFAULT_OPTIONS = {
        date_format: 'yyyy-MM-dd HH:mm:ss',
        lang: 'zh_CN',    // zh_CN | en_US
        zh_week: ['日', '一', '二', '三', '四', '五', '六'],
        en_week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        zh_meridiem: ['上午', '下午'],
        en_meridiem: ['AM', 'PM']
    };
    let api = {

        /**
         * 获取指定月份的天数
         * <p> 不传参数则返回当前月份的天数，非法日期返回 0
         * @param date string | date | number new Date() default (optional)
         * @return 天数
         */
        getDaysInMonth: (date) => {
            if (!date) {
                let d = new Date();
                return api.getDaysInMonth(d);
            }
            
            let d = new Date(date);
            if (isNaN(d)) {
                return 0;
            }
            d = new Date(d.getFullYear(), d.getMonth() + 1, 0);
            return d.getDate();
        },

        /**
         * 格式化时间
         * @param date string | date | number (required)
         * @param format 'yyyy-MM-dd HH:mm:ss' default (optional)
         *         完整格式 'yyyy-MM-dd E HH:mm:ss.S a' ---> '2017-08-02 WED 23:38:12.256'
         * @param lang zh_CN default (optional)
         */
        formatDate: (date, format, lang) => {
            if (!date) {
                return '';
            }

            let d = new Date(date);
            if (isNaN(d)) {
                return '';
            }

            let fmt = format || DEFAULT_OPTIONS.date_format,
                language = lang || DEFAULT_OPTIONS.lang,
                week = language === DEFAULT_OPTIONS.lang ? 
                    DEFAULT_OPTIONS.zh_week : DEFAULT_OPTIONS.en_week,
                meridiem = language === DEFAULT_OPTIONS.lang ? 
                    DEFAULT_OPTIONS.zh_meridiem : DEFAULT_OPTIONS.en_meridiem;

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
    }
    self.$date = api;
})(window);