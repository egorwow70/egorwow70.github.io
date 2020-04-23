let currentEuropeToday = new Date();

console.log(currentEuropeToday);

let moscowToday = new MoscowDate(currentEuropeToday);

let moscowCalendarToday = new Calendar(moscowToday);

moscowCalendarToday.createCalendar();