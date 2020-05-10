import {Human} from "../class/human";
import {Man} from "../class/man";
import {Woman} from "../class/woman";
import {HumanInfo} from "../class/humanInfo";
import '../scss/styles.scss';

const human1: Human<number> = new Human<number>("Jesus", 1, 2020);
human1.sayHi(Human.type);
human1.birth();

const human2: Human<string> = new Human<string>("Egor", "a");
human2.sayHi(Human.type);
human2.birth();

const man1: Man<string> = new Man<string>("Adam", "a", 15);
man1.sayHi(Man.type);
man1.birth();

const woman1: Woman<number> = new Woman<number>("Eva", 1, 18);
woman1.sayHi(Woman.type);
woman1.birth();

const woman2: Woman<string> = new Woman<string>("Diana", "a", 14, true);
woman2.sayHi(Woman.type);
woman2.birth();

const day: string = prompt("What is the day?", "working");

if (day === "working") {
    human2.work();
} else {
    human2.relax();
}

const human_list = new HumanInfo();
human_list.getHumanInfo(human1);
human_list.getHumanInfo(human2);
human_list.getHumanInfo(man1);
human_list.getHumanInfo(woman1);
human_list.getHumanInfo(woman2);
