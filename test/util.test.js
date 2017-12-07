import {getClass} from '../src/index';

describe('util test', () => {
    it('getClass()', () => {
        expect(getClass(null)).toEqual('Null');
        expect(getClass(undefined)).toEqual('Undefined');
        expect(getClass(1)).toEqual('Number');
        expect(getClass('1')).toEqual('String');
        expect(getClass(false)).toEqual('Boolean');
        expect(getClass({})).toEqual('Object');
        expect(getClass(/./)).toEqual('RegExp');
        expect(getClass(new Date())).toEqual('Date');
        expect(getClass(function() {})).toEqual('Function');
    })
})