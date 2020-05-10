import {Human} from "../class/human";
import {sealed} from "../decorator/sealed";

@sealed
export class Man<T> extends Human<T> {
    static type: string = "MAN";

    constructor(name: string, id: T, age: number) {
        super(name, id, age);
    }

    public work(): void {
        if (this.age >= 18) {
            super.work();
            console.log("Oh, it is hard to work at the factory");
        } else console.log(`it's too early to work for you ${this.name}`);
    }

    public relax(): void {
        super.relax();
        console.log(`${this.name} plays tanks`);
        const access = prompt("Do you want some drinking?", "Yes");
        if (access === "Yes") {
            if (this.age >= 18) {
                console.log(`and also drinks beer`);
            } else console.log(`it's too early for you ${this.name}`);
        } else console.log("Okay");
    }
}