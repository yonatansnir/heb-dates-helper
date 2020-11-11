// return format HH:MM
export function timeToString(date: Date) : string {
    let hour : string = date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString();
    let minute : string = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString();

    return `${hour}:${minute}`;
}