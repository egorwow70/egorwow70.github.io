let currentEuropeToday = new Date();

console.log(currentEuropeToday);

const moscowToday = new MoscowDate(currentEuropeToday);

const moscowCalendarToday = new Calendar(moscowToday);

moscowCalendarToday.createCalendar();