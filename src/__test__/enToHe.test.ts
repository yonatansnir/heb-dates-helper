import {dateToVerbal, dateToNumeric, heToDate, heToEn, heDateToVerbal} from '../index'
import { timeToString } from '../hoursFunction';

test('HelperFunctions', () => {
    expect(dateToNumeric('12/20/2020')).toBe('20/12/2020');
    expect(dateToVerbal('12/20/2020')).toBe('20 בדצמבר 2020');
    expect(dateToNumeric(new Date('12/20/2020'))).toBe('20/12/2020');
    expect(dateToVerbal(new Date('12/20/2020'))).toBe('20 בדצמבר 2020');
    expect(heToDate('20/12/2020')).toStrictEqual(new Date(2020, 11, 20));
    expect(heToEn('20/12/2020')).toBe('12/20/2020');
    expect(heDateToVerbal('20/12/2020')).toBe('20 בדצמבר 2020');
});

test('Hours', () => {
    expect(timeToString(new Date(2020, 11, 20, 5, 49))).toBe('05:49');
    expect(timeToString(new Date(2020, 11, 20, 15, 9))).toBe('15:09');
})