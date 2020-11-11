export function dateToVerbal(enDate: string | Date): string {
    const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']
    if (typeof enDate === 'string') enDate = new Date(enDate);
    return enDate.getDate() + ' ל' + `${months[enDate.getMonth()]} ${enDate.getFullYear()}`
}

export function heDateToVerbal(heDateString: string): string {
    const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']
    const date = heToDate(heDateString);
    return date.getDate() + ' ל' + `${months[date.getMonth()]} ${date.getFullYear()}`
}

export function dateToNumeric(enDate: string | Date): string {
    if (typeof enDate === 'string') enDate = new Date(enDate);
    return `${enDate.getDate()}/${enDate.getMonth() + 1}/${enDate.getFullYear()}`
}

export function heToDate(heDate: string): Date {
    let date: string[] | number[] = heDate.split('/');
    date = date.map(d => Number(d));
    return new Date(date[2], date[1] - 1, date[0])
}

export function heToEn(heDate: string): string {
    let dateArr: string[] | number[] = heDate.split('/');
    return `${dateArr[1]}/${dateArr[0]}/${dateArr[2]}`
}
