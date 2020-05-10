import {IHuman} from "../interface/interface";

export class HumanInfo<T extends IHuman>{
    public getHumanInfo(human: T): void{
        human.getInfo();
    }
}