/**
 * -------------------------------
 * data.js
 * <p> 提供了操作 `Date` 的相关功能
 * @author devin
 * -------------------------------
 */

!((window) => {
    let self = window;
    let api = {
        
        /**
         * 获取指定月份的天数
         * <p> 不传参数则返回当前月份的天数，非法日期返回 0
         * @param date string | date | number 指定日期
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
        }
    }
    self.$date = api;
})(window);