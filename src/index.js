"use strict";
exports.__esModule = true;
var englishToHe = function (englishDate, type) {
    if (type === void 0) { type = 'numeric'; }
    function dateToNumeric(enDate) {
        if (typeof enDate === 'string')
            enDate = new Date(enDate);
        return enDate.getDate() + "/" + (enDate.getMonth() + 1) + "/" + enDate.getFullYear();
    }
    function dateToVerbal(enDate) {
        var months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
        if (typeof enDate === 'string')
            enDate = new Date(enDate);
        return enDate.getDate() + ' ל' + (months[enDate.getMonth()] + " " + enDate.getFullYear());
    }
    var dateFormat = {
        verbal: dateToVerbal,
        numeric: dateToNumeric
    };
    return dateFormat[type](englishDate);
};
exports["default"] = englishToHe;
