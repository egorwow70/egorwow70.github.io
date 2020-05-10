// /// <reference path="../namespace/namespaces.ts" />
import {sealed} from "../decorator/sealed";
import {Working} from "../namespace/namespaces";
import {Time} from "../namespace/namespaces";
import {IHuman} from "../interface/interface";

@sealed
export class Human<T> extends Working.Work implements IHuman {
    static type: string = "HUMAN";

    protected hasWork: boolean = false;
    protected nameWork: string;
    protected name: string;
    protected id: T;
    protected age: number;

    constructor(userName: string, userId: T, userAge?: number) {
        super();
        this.name = userName;
        this.id = userId;
        this.age = (userAge) ? userAge : 18;      
    }

    public set Name(userName: string) {
        this.name = userName;
    }

    public get Name(): string {
        return this.name;
    }

    public set Id(userId: T) {
        this.id = userId;
    }

    public get Id(): T {
        return this.id;
    }

    public set Age(userAge: number) {
        this.age = userAge;
    }

    public get Age(): number {
        return this.age;
    }

    public sayHi(humanType: string): void {
        console.log(`I am a ${humanType}`);
        console.log(`My name is ${this.name}, i'm ${this.age} years old`);
    }

    public birth():void {
        console.log(`I was born in ${Time.currentYear - this.age}`);
    }

    public work():void {
        if (this.hasWork === false){
            const decision = prompt('Do you want to get a job?',"Yes");
            if (decision === "Yes") {
                this.hasWork = true;
                this.nameWork = this.getWork();
                console.log(`${this.name} is working as a ${this.nameWork}`);
            }  else console.log(`okay, you are lazy`);
        } else  console.log(`${this.name} has a good job as a ${this.nameWork}. ${this.name} is working.`);
    }

    public relax():void {
        console.log(`${this.name} is relaxaing`);
    }

    public getInfo(): void {
        console.log(`name: ${this.name}, id: ${this.id}, age: ${this.age}`);
    }

}