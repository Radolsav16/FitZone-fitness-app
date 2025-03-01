export function DateConverter(date){
    const newDateFormat = new Date(date)
    return newDateFormat.toLocaleDateString();
}