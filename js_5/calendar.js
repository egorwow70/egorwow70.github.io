class Calendar {

    constructor(date) {
        this._date = date;
    }

    createCalendarCarcass() {

        let calendar = document.createElement('div');

        calendar.classList.add('calendar');

        document.body.append(calendar);

        let calendar_wrapper = document.createElement('div');

        calendar_wrapper.classList.add('calendar-wrapper');

        calendar.append(calendar_wrapper);

        return this;

    }

    createCalendarElements() {

        const NUMB_OF_CALENDAR_ELEMENTS = 3;

        let calendar_wrapper = document.querySelector('.calendar-wrapper');

        for (let i = 0; i < NUMB_OF_CALENDAR_ELEMENTS; i++) {

            let currentCalendarElement = document.createElement('div');

            if (i == 0) {
                currentCalendarElement.classList.add('calendar__header');
            } else if (i == 1) {
                currentCalendarElement.classList.add('calendar__sub-header');
            } else {
                currentCalendarElement.classList.add('calendar__days-table')
            }

            calendar_wrapper.append(currentCalendarElement);

        }

        return this;

    }

    createCalendarHeader() {

        let calendar_header = document.querySelector('.calendar__header');

        for (let i = 0; i < 2; i++) {

            let currentHeaderCell = document.createElement('div');

            if (i == 0) {
                currentHeaderCell.classList.add('calendar__info');

                currentHeaderCell.innerHTML = `${convertMonthToString(this._date.monthInfo)} ${this._date.yearInfo}`;
            } else {
                currentHeaderCell.classList.add('calendar__switch-list');

                for (let i = 0; i < 2; i++) {

                    let currentSwitch = document.createElement('div');

                    currentSwitch.classList.add('calendar__switch');

                    if (i == 0) {

                        currentSwitch.classList.add('calendar__switch_top');
                    } else {
                        currentSwitch.classList.add('calendar__switch_bot');
                    }

                    currentHeaderCell.append(currentSwitch);

                }
            }

            calendar_header.append(currentHeaderCell);
        }

        return this;

    }

    createCalendarDays() {

        const NUMB_OF_CALENDAR_DAYS = 7;

        let days_line = document.querySelector('.calendar__sub-header');

        for (let i = 0; i < NUMB_OF_CALENDAR_DAYS; i++) {

            let currentDay = document.createElement('div');

            currentDay.classList.add('calendar__day');

            days_line.append(currentDay);

            days_line.childNodes[i].innerHTML = `${day_list[i]}`;
        }

        return this;

    }

    createCalendarDaysTable() {

        const NUMB_OF_CALENDAR_DAYS_TABLE_CELLS = 42;

        let calendar_days_table = document.querySelector('.calendar__days-table');

        for (let i = 0; i < NUMB_OF_CALENDAR_DAYS_TABLE_CELLS; i++) {

            let currentCalendarCell = document.createElement('div');

            currentCalendarCell.classList.add('calendar__cell');

            calendar_days_table.append(currentCalendarCell);

        }

        return this;

    }

    createCalendarCurrentMonth() {

        let numFirstDayInCurrentMonth = this._date.getFirstDayFromMonth() - 1;
        let numDaysInCurrentMonth = this._date.daysInMonth() - 1;
        let numLastDayInCurrentMonth = numFirstDayInCurrentMonth + numDaysInCurrentMonth;

        let calendar_days_table = document.querySelector('.calendar__days-table');

        for (let i = numFirstDayInCurrentMonth, j = 1; i <= numLastDayInCurrentMonth; i++, j++) {

            calendar_days_table.childNodes[i].innerHTML = `${j}`;
        }

        return this;

    }

    createCalendarNextMonth() {

        const NUMB_OF_CALENDAR_DAYS_TABLE_CELLS = 42;

        let numbLastDayInCurrentMonth = this._date.getFirstDayFromMonth() + this._date.daysInMonth() - 2;

        let numbFirstDayInNextMonth = numbLastDayInCurrentMonth + 1;

        let calendar_days_table = document.querySelector('.calendar__days-table');

        for (let i = numbFirstDayInNextMonth, j = 1; i < NUMB_OF_CALENDAR_DAYS_TABLE_CELLS; i++, j++) {

            calendar_days_table.childNodes[i].classList.add('calendar__cell_grey');

            calendar_days_table.childNodes[i].innerHTML = `${j}`;
        }

        return this;

    }

    createCalendarPreviousMonth() {

        let previousMonthDate = new MoscowDate(this._date.getPreviousMonth());

        let valueLastDayOfPreviousMonth = previousMonthDate.daysInMonth();

        let numFirstDayInCurrentMonth = this._date.getFirstDayFromMonth() - 1;

        let numLastDayInPreviousMonth = numFirstDayInCurrentMonth - 1;

        let calendar_days_table = document.querySelector('.calendar__days-table');

        for (let i = numLastDayInPreviousMonth, j = valueLastDayOfPreviousMonth; i >= 0; i--, j--) {

            calendar_days_table.childNodes[i].classList.add('calendar__cell_grey');

            calendar_days_table.childNodes[i].innerHTML = `${j}`;
        }

        return this;

    }

    createCalendarCurrentDay() {

        let calendar_days_table = document.querySelector('.calendar__days-table');

        let numFirstDayInCurrentMonth = this._date.getFirstDayFromMonth() - 1;

        let numCurrentDayInCurrentMonth = numFirstDayInCurrentMonth + this._date.dayInfo - 1;

        calendar_days_table.childNodes[numCurrentDayInCurrentMonth].classList.add('calendar__cell_green-box');

        return this;

    }

    createCalendar() {

        this.createCalendarCarcass()

        .createCalendarElements()

        .createCalendarHeader()

        .createCalendarDays()

        .createCalendarDaysTable()

        .createCalendarCurrentMonth()

        .createCalendarNextMonth()

        .createCalendarPreviousMonth()

        .createCalendarCurrentDay();

    }

}