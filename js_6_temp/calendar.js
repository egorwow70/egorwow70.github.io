class Calendar {

    static NUMB_OF_CALENDAR_ELEMENTS = 3;
    static NUMB_OF_CALENDAR_DAYS = 7;
    static NUMB_OF_CALENDAR_DAYS_TABLE_CELLS = 42;
    static NUMB_OF_CALENDAR_MONTH_TABLE_CELLS = 16;

    constructor(date) {
        this._date = date;
    }

    get dateInfo() {
        return this._date;
    }

    createCalendarCarcass() {
        const calendar = createDomElement('div', 'calendar');
        document.body.append(calendar);

        const calendar_wrapper = createDomElement('div', 'calendar-wrapper');
        calendar.append(calendar_wrapper);
        return this;
    }

    createCalendarElements() {
        const calendar_wrapper = document.querySelector('.calendar-wrapper');
        for (let i = 0; i < Calendar.NUMB_OF_CALENDAR_ELEMENTS; i++) {
            let classChoice = (i == 0) ? 'calendar__header' :
                (i == 1) ? 'calendar__sub-header' :
                'calendar__days-table';
            let currentCalendarElement = createDomElement('div', classChoice);
            calendar_wrapper.append(currentCalendarElement);
        }
        return this;
    }

    createCalendarHeader() {
        const calendar_header = document.querySelector('.calendar__header');
        for (let i = 0; i < 2; i++) {
            if (i == 0) {
                let currentHeaderCell = createDomElement('div', 'calendar__info');
                currentHeaderCell.innerHTML = getCalendarInfo(this._date.getMonthName(), this._date.yearInfo);
                calendar_header.append(currentHeaderCell);
            } else {
                let currentHeaderCell = createDomElement('div', 'calendar__switch-list');
                for (let i = 0; i < 2; i++) {
                    let currentSwitch = createDomElement('div', 'calendar__switch');
                    if (i == 0) {
                        currentSwitch.classList.add('calendar__switch_top');
                    } else {
                        currentSwitch.classList.add('calendar__switch_bot');
                    }
                    currentHeaderCell.append(currentSwitch);
                }
                calendar_header.append(currentHeaderCell);
            }
        }
        return this;
    }

    createCalendarDays() {
        const days_line = document.querySelector('.calendar__sub-header');
        for (let i = 0; i < Calendar.NUMB_OF_CALENDAR_DAYS; i++) {
            let currentDay = createDomElement('div', 'calendar__day');
            days_line.append(currentDay);
            days_line.childNodes[i].innerHTML = `${day_list[i]}`;
        }
        return this;
    }

    createCalendarCurrentDaysTable(daysTableClassName = 'calendar__days-table_current') {
        const calendar_days_table = document.querySelector('.calendar__days-table');
        let current_calendar_days_table = createDomElement('div', daysTableClassName);
        calendar_days_table.append(current_calendar_days_table);

        this.createCalendarTableCells(current_calendar_days_table);
        this.createCalendarCurrentMonth(current_calendar_days_table);
        this.createCalendarNextMonth(current_calendar_days_table);
        this.createCalendarPreviousMonth(current_calendar_days_table);
        return this;
    }

    createCalendarTableCells(current_calendar_days_table, numCells = Calendar.NUMB_OF_CALENDAR_DAYS_TABLE_CELLS, extraCellClassName) {
        for (let i = 0; i < numCells; i++) {
            let currentCalendarCell = createDomElement('div', 'calendar__cell');
            if (extraCellClassName) currentCalendarCell.classList.add(extraCellClassName);
            current_calendar_days_table.append(currentCalendarCell);
        }
        return this;
    }

    createCalendarCurrentMonth(current_calendar_days_table) {
        const numFirstDayInCurrentMonth = this._date.getFirstDayFromMonth() - 1;
        const numDaysInCurrentMonth = this._date.daysInMonth() - 1;
        const numLastDayInCurrentMonth = numFirstDayInCurrentMonth + numDaysInCurrentMonth;
        for (let i = numFirstDayInCurrentMonth, j = 1; i <= numLastDayInCurrentMonth; i++, j++) {
            if (current_calendar_days_table.childNodes[i].classList.contains('calendar__cell_grey')) {
                current_calendar_days_table.childNodes[i].classList.remove('calendar__cell_grey');
            }
            current_calendar_days_table.childNodes[i].innerHTML = `${j}`;

            this.setDataAttributesToDaysCells(current_calendar_days_table.childNodes[i], j, this._date.monthInfo, this._date.yearInfo);

        }
        return this;
    }

    createCalendarNextMonth(current_calendar_days_table) {
        const numbLastDayInCurrentMonth = this._date.getFirstDayFromMonth() + this._date.daysInMonth() - 2;
        const numbFirstDayInNextMonth = numbLastDayInCurrentMonth + 1;
        for (let i = numbFirstDayInNextMonth, j = 1; i < Calendar.NUMB_OF_CALENDAR_DAYS_TABLE_CELLS; i++, j++) {
            current_calendar_days_table.childNodes[i].classList.add('calendar__cell_grey');
            current_calendar_days_table.childNodes[i].innerHTML = `${j}`;
            current_calendar_days_table.childNodes[i].innerHTML = `${j}`;
            if (this._date.monthInfo == 12) {
                this.setDataAttributesToDaysCells(current_calendar_days_table.childNodes[i], j, 1, this._date.yearInfo + 1);
            } else {
                this.setDataAttributesToDaysCells(current_calendar_days_table.childNodes[i], j, this._date.monthInfo + 1, this._date.yearInfo);
            }
        }
        return this;
    }

    createCalendarPreviousMonth(current_calendar_days_table) {
        const previousMonthDate = new MoscowDate(this._date.getPreviousMonth());
        const valueLastDayOfPreviousMonth = previousMonthDate.daysInMonth();
        const numFirstDayInCurrentMonth = this._date.getFirstDayFromMonth() - 1;
        const numLastDayInPreviousMonth = numFirstDayInCurrentMonth - 1;
        for (let i = numLastDayInPreviousMonth, j = valueLastDayOfPreviousMonth; i >= 0; i--, j--) {
            current_calendar_days_table.childNodes[i].classList.add('calendar__cell_grey');
            current_calendar_days_table.childNodes[i].innerHTML = `${j}`;
            if (this._date.monthInfo == 1) {
                this.setDataAttributesToDaysCells(current_calendar_days_table.childNodes[i], j, 12, this._date.yearInfo - 1);
            } else {
                this.setDataAttributesToDaysCells(current_calendar_days_table.childNodes[i], j, this._date.monthInfo - 1, this._date.yearInfo);
            }

        }
        return this;
    }

    createCalendarPreviousMonthDaysTable() {
        const previousDaysTableClassName = 'calendar__days-table_previous';
        const previousMonthDate = new MoscowDate(this._date.getPreviousMonth());
        const previousMonthCalendar = new Calendar(previousMonthDate);

        previousMonthCalendar.createCalendarCurrentDaysTable(previousDaysTableClassName);
        return this;
    }

    createCalendarNextMonthDaysTable() {
        const nextDaysTableClassName = 'calendar__days-table_next';
        const nextMonthDate = new MoscowDate(this._date.getNextMonth());
        const nextMonthCalendar = new Calendar(nextMonthDate);

        nextMonthCalendar.createCalendarCurrentDaysTable(nextDaysTableClassName);
        return this;
    }

    createCalendarCurrentDay() {
        const current_calendar_days_table = document.querySelector('.calendar__days-table_current');
        const numFirstDayInCurrentMonth = this._date.getFirstDayFromMonth() - 1;
        const numCurrentDayInCurrentMonth = numFirstDayInCurrentMonth + this._date.dayInfo - 1;
        current_calendar_days_table.childNodes[numCurrentDayInCurrentMonth].classList.add('calendar__cell_green-box');
        return this;
    }

    createCalendarMonthTable() {
        const calendar_wrapper = document.querySelector('.calendar-wrapper');
        const calendar_month_table = createDomElement('div', 'calendar__month-table');
        calendar_wrapper.append(calendar_month_table);
        return this;
    }

    createCalendarCurrentMonthTable(monthTableClassName = 'calendar__month-table_current') {

        const calendar_month_table = document.querySelector('.calendar__month-table');
        let current_calendar_month_table = createDomElement('div', monthTableClassName);
        calendar_month_table.append(current_calendar_month_table);

        this.createCalendarTableCells(current_calendar_month_table, Calendar.NUMB_OF_CALENDAR_MONTH_TABLE_CELLS, 'calendar__month-cell');

        const firstYearMonthEuropeDate = new Date(1);
        const firstYearMonthMoscowDate = new MoscowDate(firstYearMonthEuropeDate);
        for (let i = 0; i < Calendar.NUMB_OF_CALENDAR_MONTH_TABLE_CELLS; i++) {
            let nameCurrentMonth = firstYearMonthMoscowDate.getMonthName();
            let modNameCurrentMonth = nameCurrentMonth.slice(0, 3);
            current_calendar_month_table.childNodes[i].setAttribute('data-month', i);
            current_calendar_month_table.childNodes[i].innerHTML = `${modNameCurrentMonth.toUpperCase()}`;
            firstYearMonthMoscowDate.month = firstYearMonthMoscowDate.monthInfo + 1;
            if (i >= numbCalendarMonth) {
                current_calendar_month_table.childNodes[i].setAttribute('data-month', i - numbCalendarMonth);
                current_calendar_month_table.childNodes[i].classList.add('calendar__cell_grey');
            }
        }

        return this;
    }

    setDataAttributesToDaysCells(elem, numDay, numMonth, numYear) {
        elem.setAttribute('data-day', numDay);
        elem.setAttribute('data-month', numMonth);
        elem.setAttribute('data-year', numYear);
        return this;
    }

    createCalendar() {
        this.createCalendarCarcass()
            .createCalendarElements()
            .createCalendarHeader()
            .createCalendarDays()
            .createCalendarCurrentDaysTable()
            .createCalendarCurrentDay()
            .createCalendarPreviousMonthDaysTable()
            .createCalendarNextMonthDaysTable();

    }

}