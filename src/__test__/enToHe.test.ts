import {dateToVerbal, dateToNumeric, heToDate, heToEn, heDateToVerbal} from '../index'

test('HelperFunctions', () => {
    expect(dateToNumeric('12/20/2020')).toBe('20/12/2020');
    expect(dateToVerbal('12/20/2020')).toBe('20 בדצמבר 2020');
    expect(dateToNumeric(new Date('12/20/2020'))).toBe('20/12/2020');
    expect(dateToVerbal(new Date('12/20/2020'))).toBe('20 בדצמבר 2020');
    expect(heToDate('20/12/2020')).toStrictEqual(new Date(2020, 11, 20));
    expect(heToEn('20/12/2020')).toBe('12/20/2020');
    expect(heDateToVerbal('20/12/2020')).toBe('20 בדצמבר 2020');
});
