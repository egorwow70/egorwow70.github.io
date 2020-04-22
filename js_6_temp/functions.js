function createDomElement(tagName, className = '') {
    let domElement = document.createElement(tagName);
    domElement.classList.add(className);
    return domElement;
}

function switchElementsToTop(className) {

    removeCurrent();

    let classNamePrevious = className + '_previous';
    let classNameCurrent = className + '_current';
    let classNameNext = className + '_next';

    let searchClassNamePrevious = '.' + classNamePrevious;
    let searchClassNameCurrent = '.' + classNameCurrent;
    let searchClassNameNext = '.' + classNameNext;

    let botMonth = document.querySelector(searchClassNameNext);
    botMonth.remove();

    let currentMonth = document.querySelector(searchClassNameCurrent);
    currentMonth.classList.remove(classNameCurrent);
    currentMonth.classList.add(classNameNext);

    let topMonth = document.querySelector(searchClassNamePrevious);
    topMonth.classList.remove(classNamePrevious);
    topMonth.classList.add(classNameCurrent);

    setCurrent();

}

function switchElementsToBot(className) {

    removeCurrent();

    let classNamePrevious = className + '_previous';
    let classNameCurrent = className + '_current';
    let classNameNext = className + '_next';

    let searchClassNamePrevious = '.' + classNamePrevious;
    let searchClassNameCurrent = '.' + classNameCurrent;
    let searchClassNameNext = '.' + classNameNext;

    let topMonth = document.querySelector(searchClassNamePrevious);
    topMonth.remove();

    let currentMonth = document.querySelector(searchClassNameCurrent);
    currentMonth.classList.remove(classNameCurrent);
    currentMonth.classList.add(classNamePrevious);

    let botMonth = document.querySelector(searchClassNameNext);
    botMonth.classList.remove(classNameNext);
    botMonth.classList.add(classNameCurrent);

    setCurrent();

}

function switchCalendarTopMonth() {
    switchElementsToTop('calendar__days-table');

    moscowCalendarToday.createCalendarPreviousMonthDaysTable();
}

function switchCalendarBotMonth() {
    switchElementsToBot('calendar__days-table');

    moscowCalendarToday.createCalendarNextMonthDaysTable();
}

function switchCalendarHeaderInfo() {
    let calendar_header_info = document.querySelector('.calendar__info');
    calendar_header_info.innerHTML = `${moscowCalendarToday.dateInfo.getMonthName()} ${moscowCalendarToday.dateInfo.yearInfo}`;
}

function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function removeSelectedDiv() {
    if (selectedDiv) {
        selectedDiv.classList.remove('calendar__cell_highlight');
    }
}

function removeCurrent() {
    if (a) {
        calendarCurrentDay.classList.remove('calendar__cell_green-box');
    } else {
        if (q) {
            let calendarCurMonth = document.querySelector('.calendar__cell_bg-green');
            if (calendarCurMonth) {
                calendarCurMonth.classList.remove('calendar__cell_bg-green');
            }

        }
        q = false;
    }

}

function setCurrent() {
    let currentMonthDate = new MoscowDate(currentEuropeToday);
    let numbCurMonth = currentMonthDate.monthInfo;
    if (a) {
        if (deepEqual(currentMonthDate, moscowToday)) {
            moscowCalendarToday.createCalendarCurrentDay();
        }
    } else {
        const numbNextYearElements = 4;
        calendar__month_table_current = document.querySelector('.calendar__month-table_current');
        if (moscowToday.yearInfo == currentMonthDate.yearInfo) {
            calendar__month_table_current.childNodes[numbCurMonth - 1].classList.add('calendar__cell_bg-green');
        }
        if (moscowToday.yearInfo == currentMonthDate.yearInfo - 1 && numbCurMonth <= numbNextYearElements) {
            calendar__month_table_current.childNodes[numbCurMonth + numbCalendarMonth - 1].classList.add('calendar__cell_bg-green');
            calendar__month_table_current.childNodes[numbCurMonth + numbCalendarMonth - 1].classList.remove('calendar__cell_grey');
        }
        q = true;
    }
}

function setBorderCell(cell) {
    let selectDay = `${cell.dataset.day}`;
    let selectMonth = `${cell.dataset.month}`;
    let selectYear = `${cell.dataset.year}`;

    selectDay = checkOneSymbol(selectDay);
    selectMonth = checkOneSymbol(selectMonth);
    selectYear = checkOneSymbol(selectYear);

    alert(selectDay + '.' + selectMonth + '.' + selectYear);

    removeSelectedDiv();

    selectedDiv = cell;
    selectedDiv.classList.add('calendar__cell_highlight');
}

function switchCalendarYearInfo() {
    let calendar_header_info = document.querySelector('.calendar__info');
    calendar_header_info.innerHTML = `${moscowCalendarToday.dateInfo.yearInfo}`;
}

function switchMonthToTop() {
    removeSelectedDiv();

    let currentMonth = moscowCalendarToday.dateInfo.monthInfo;
    let previousMonth = (currentMonth == 1) ? 12 : currentMonth - 1;
    moscowCalendarToday.dateInfo.month = previousMonth;

    if (currentMonth == 1) {
        let currentYear = moscowCalendarToday.dateInfo.yearInfo;
        let previousYear = currentYear - 1;
        moscowCalendarToday.dateInfo.year = previousYear;
    }

    switchCalendarHeaderInfo();

    switchCalendarTopMonth();

}

function switchMonthToBot() {
    removeSelectedDiv();

    let currentMonth = moscowCalendarToday.dateInfo.monthInfo;
    let nextMonth = (currentMonth == 12) ? 1 : currentMonth + 1;
    moscowCalendarToday.dateInfo.month = nextMonth;

    if (currentMonth == 12) {
        let currentYear = moscowCalendarToday.dateInfo.yearInfo;
        let nextYear = currentYear + 1;
        moscowCalendarToday.dateInfo.year = nextYear;
    }

    switchCalendarHeaderInfo();

    switchCalendarBotMonth();

}


function switchYearToTop() {

    let currentYear = moscowCalendarToday.dateInfo.yearInfo;
    let previousYear = (currentYear > 0) ? currentYear - 1 : (-1) * currentYear;
    moscowCalendarToday.dateInfo.year = previousYear;

    switchElementsToTop('calendar__month-table');

    switchCalendarYearInfo();

    moscowCalendarToday.createCalendarCurrentMonthTable('calendar__month-table_previous');

}

function switchYearToBot() {

    let currentYear = moscowCalendarToday.dateInfo.yearInfo;
    let nextYear = (currentYear > 0) ? currentYear + 1 : (-1) * currentYear;
    moscowCalendarToday.dateInfo.year = nextYear;

    switchElementsToBot('calendar__month-table');

    switchCalendarYearInfo();

    moscowCalendarToday.createCalendarCurrentMonthTable('calendar__month-table_next');

}

function selectCell(item) {
    let div = event.target.closest('div');

    if (!div) return;

    if (!item.contains(div)) return;

    (b) ? setBorderCell(div): setHeaderInfo(div);

}

function getCalendarInfo(monthName, numbYear) {
    return `${monthName} ${numbYear}`;
}

function setHeaderInfo(cell) {
    let numSelectMonth = Number(cell.dataset.month) + 1;

    if (cell.classList.contains('calendar__cell_grey')) {
        moscowCalendarToday.dateInfo.year = moscowCalendarToday.dateInfo.yearInfo + 1;
    }
    moscowCalendarToday.dateInfo.month = numSelectMonth;

    calendar_info.innerHTML = getCalendarInfo(moscowCalendarToday.dateInfo.getMonthName(), moscowCalendarToday.dateInfo.yearInfo);
}

function switchToTop() {
    (a) ? switchMonthToTop(): switchYearToTop();
}

function switchToBot() {
    (a) ? switchMonthToBot(): switchYearToBot();
}

function clickOnDay() {
    b = true;

    selectCell(calendar_days_table);
}

function setHeaderYear() {
    calendar_info.innerHTML = `${moscowCalendarToday.dateInfo.yearInfo} `;
}

function removeCalendarDaysTableChildren() {
    const numbChildrenOfDaysTable = 3;
    for (let i = numbChildrenOfDaysTable; i > 0; i--) {
        calendar_days_table.childNodes[i - 1].remove();
    }
}

function setNoDisplay(elem) {
    elem.style.display = 'none';
}

function setDisplay(elem) {
    elem.style.display = 'flex';
}

function setClass(className) {
    this.classList.add(className);
}

function changeDaysEventToMonth() {

    if (a) {
        setHeaderYear();

        calendar_days_table.classList.add('calendar__days-table_missed');
        calendar_sub_header.classList.add('calendar__sub-header_missed');

        setTimeout(() => {
            removeCalendarDaysTableChildren();

            setNoDisplay(calendar_days_table);
            setNoDisplay(calendar_sub_header);

            moscowCalendarToday.createCalendarMonthTable()
                .createCalendarCurrentMonthTable()
                .createCalendarCurrentMonthTable('calendar__month-table_previous')
                .createCalendarCurrentMonthTable('calendar__month-table_next');

            setCurrent();

            calendar__month_table_current = document.querySelector('.calendar__month-table_current');
            calendar__month_table_current.classList.add('calendar__month-table_current-not-normal-scale');

            setTimeout(() => {
                calendar__month_table_current.classList.remove('calendar__month-table_current-not-normal-scale');
            }, 10);

        }, 100);

        setTimeout(() => {
            calendar_month_table = document.querySelector('.calendar__month-table');
            calendar_month_table.onclick = changeMonthEventToDays;
        }, 150);

    }

    a = false;
}

function changeMonthEventToDays() {
    a = true;

    b = false;

    selectCell(calendar_month_table);

    calendar_month_table.classList.add('calendar__month-table_missed');
    calendar_month_table.remove();

    setDisplay(calendar_days_table);
    setDisplay(calendar_sub_header);

    moscowCalendarToday
        .createCalendarCurrentDaysTable()
        .createCalendarPreviousMonthDaysTable()
        .createCalendarNextMonthDaysTable();

    setCurrent();

    setTimeout(() => {
        calendar_days_table.classList.add('calendar__days-table_unmissed');
        calendar_sub_header.classList.add('calendar__sub-header_unmissed');

        calendar_days_table.classList.remove('calendar__days-table_missed');
        calendar_sub_header.classList.remove('calendar__sub-header_missed');
    }, 50);
}

function checkOneSymbol(str) {
    if (str.length == 1) {
        return '0' + str;
    } else return str;
}