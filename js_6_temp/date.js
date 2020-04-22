class MoscowDate {

    constructor(date) {
        this._day = date.getDate();
        this._month = date.getMonth() + 1;
        this._year = date.getFullYear();
    }

    get dayInfo() {
        return this._day;
    }

    set month(value) {
        this._month = value;
    }

    get monthInfo() {
        return this._month;
    }

    set year(value) {
        this._year = value;
    }

    get yearInfo() {
        return this._year;
    }

    daysInMonth() {
        return 32 - new Date(this.yearInfo, this.monthInfo - 1, 32).getDate();
    }

    getFirstDayFromMonth() {
        let temp = new Date(this.yearInfo, this.monthInfo - 1, 1);
        return (temp.getDay() == 0) ? 7 : temp.getDay();
    }

    getPreviousMonth() {
        return new Date(this.yearInfo, this.monthInfo - 2, 1);
    }

    getNextMonth() {
        return new Date(this.yearInfo, this.monthInfo, 1);
    }

    getMonthName() {
        const options = {
            month: "long",
        };

        let date = new Date(this._year, this._month - 1, this._day);

        return date.toLocaleString("en-US", options);
    }

}