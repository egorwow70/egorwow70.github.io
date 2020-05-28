export interface GoalListSettings {
   goalLimit: number;
   goalFilterLimit: number;

   goalLimiter: boolean;
   goalFilterLimiter: boolean;
   goalSortLimiter: boolean;
   goalCleanLimiter: boolean;

   isGoalSortedByIncrease: boolean;
   isGoalSortedByDecrease: boolean;
   isGoalCleaned: boolean;
}