export class Goal {

    constructor(
        private id: string,
        private name: string,
        private isSaved: boolean = false,
        private isDone: boolean = false,
        private isCanSave: boolean = false,
        private isCanDone: boolean = false
    ) { }

    public get Id(): string {
        return this.id;
    }

    public set Id(goalId: string) {
        this.id = goalId;
    }

    public get Name(): string {
        return this.name;
    }

    public set Name(goalName: string) {
        this.name = goalName;
    }

    public get IsSaved(): boolean {
        return this.isSaved;
    }

    public set IsSaved(isSaved: boolean) {
        this.isSaved = isSaved;
    }

    public get IsDone(): boolean {
        return this.isDone;
    }

    public set IsDone(isDone: boolean) {
        this.isDone = isDone;
    }

    public get IsCanSave(): boolean {
        return this.isCanSave;
    }

    public set IsCanSave(isCanSave: boolean) {
        this.isCanSave = isCanSave;
    }

    public get IsCanDone(): boolean {
        return this.isCanDone;
    }

    public set IsCanDone(isCanDone: boolean) {
        this.isCanDone = isCanDone;
    }

    public eguals(goal: Goal): boolean {
        return this.Name === goal.Name
            && this.Id === goal.Id;
    }

}