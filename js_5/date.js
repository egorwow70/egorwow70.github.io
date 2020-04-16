class MoscowDate {

    constructor(date) {
        this._day = date.getDate();
        this._month = date.getMonth() + 1;
        this._year = date.getFullYear();
    }

    get dayInfo() {
        return this._day;
    }

    get monthInfo() {
        return this._month;
    }

    get yearInfo() {
        return this._year;
    }

    daysInMonth() {
        return 32 - new Date(this.yearInfo, this.monthInfo - 1, 32).getDate();
    }

    getFirstDayFromMonth() {
        let temp = new Date(this.yearInfo, this.monthInfo - 1, 1);
        if (temp.getDay() == 0) {
            return 7;
        }
        return temp.getDay();
    }

    getPreviousMonth() {
        let temp = new Date(this.yearInfo, this.monthInfo - 2, 1);
        return temp;
    }

}