import {Human} from "../class/human";
import {sealed} from "../decorator/sealed";

@sealed
export class Woman<T> extends Human<T> {
    static type: string = "WOMAN";

    constructor(name: string, id: T, age: number, private hasChild: boolean = false) {
        super(name, id, age);
        this.hasChild = hasChild;
    }

    public work(): void {
        if (this.age >= 18) {
            super.work();
            console.log("Wow, it is good to be a hairdresser");
        } else console.log(`it's too early to work for you ${this.name}`);
    }

    public relax(): void {
        super.relax();
        console.log(`${this.name} goes shopping`);
        const access = prompt("Do you want to go to club?", "Yes");
        if (access === "Yes") {
            if (this.age >= 18 && this.hasChild === false) {
                console.log(`Oh, nice music in this club`);
            } else console.log(`it's too early for you ${this.name} or you have a child, go Home!`);
        } else console.log("Okay");
    }
}