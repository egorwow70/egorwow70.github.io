import { Goal } from '../goal/class/goal';

export class GoalListSnapshot {

    constructor(
        public goalSearch: string,
        public goalList: Goal[]
    ) { }

    public static fromJSON(json: any): GoalListSnapshot {
        return Boolean(json)
            ? new GoalListSnapshot(
                json.goalSearch,
                (json.goalList || []).filter(Boolean).map(Goal.fromJSON)
            )
            : null;
    }

    public static toJSON(goalListSnapshot: GoalListSnapshot): any {
        return Boolean(goalListSnapshot)
            ? {
                goalSearch: goalListSnapshot.goalSearch,
                goalList: (goalListSnapshot.goalList || []).filter(Boolean).map(Goal.toJSON)
            }
            : {};
    }
}