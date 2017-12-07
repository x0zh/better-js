import {formatDate, dayCountOfMonth, isValidDate} from '../src/index'

describe('date test', () => {
    it('isValidDate()', () => {
        expect(isValidDate('2017')).toBe(true);
        expect(isValidDate('2017/12/07 10:47:35')).toBe(true);
        expect(isValidDate(new Date('2017-12-07'))).toBe(true);

        expect(isValidDate('2017/12/07 24:00:00')).toBe(false);
        expect(isValidDate(new Date('2017-13-01'))).toBe(false);
    })

    it('formatDate()', () => {
        // 使用默认格式
        expect(formatDate('2017/12/07 10:47:35')).toEqual('2017-12-07 10:47:35');

        // 使用 12 小时制的时间
        expect(formatDate('2017/12/07 10:47:35', 'yyyy-MM-dd hh:mm:ss a'))
            .toEqual('2017-12-07 10:47:35 上午');
        expect(formatDate('2017/12/07 12:47:35', 'yyyy-MM-dd hh:mm:ss a'))
            .toEqual('2017-12-07 12:47:35 下午');

        // 使用英文语言
        expect(formatDate('2017/12/07 10:47:35', 'yyyy-MM-dd E', 'en_US'))
            .toEqual('2017-12-07 Thu');
        // 使用默认语言
        expect(formatDate('2017/12/07 10:47:35', 'yyyy-MM-dd E'))
            .toEqual('2017-12-07 四');

        // 格式化毫秒
        expect(formatDate('2017/12/07 10:47:35', 'yyyy-MM-dd HH:mm:ss.S'))
            .toEqual('2017-12-07 10:47:35.0');

        // 只格式化时间
        expect(formatDate('2017/12/07 10:47:35', 'HH:mm:ss'))
            .toEqual('10:47:35');

        // 只格式化年份
        expect(formatDate('2017/12/07 10:47:35', 'yyyy'))
            .toEqual('2017');
        
        // 不传参数
        expect(formatDate()).toEqual('');
        // 非法参数
        expect(formatDate(new Date('2017-13-01'))).toEqual('');
    })

    it('dayCountOfMonth()', () => {
        expect(dayCountOfMonth(new Date('2017-12'))).toEqual(31);
        // 不传参数返回当月的天数
        expect(dayCountOfMonth()).toEqual(dayCountOfMonth(new Date()));
        // 非法参数返回0
        expect(dayCountOfMonth('2017/12/07 15:61:20')).toEqual(0);
    })
});