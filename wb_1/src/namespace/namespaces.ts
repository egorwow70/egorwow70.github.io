export namespace Time {
    const currentDate: Date = new Date();
    export const currentYear: number = currentDate.getFullYear();
};

export namespace Working {
    enum workTypes {
        Actress = 'actress',
        Architect = 'Architect',
        Barber = 'Barber',
        Businessman = 'Businessman',
        Chef = 'Chef',
        Dentist = 'Dentist'
    };
    
    function getWorkList(workTypes: any): string {
        let work_list: string[] = [];
    
        for (const enumMember in workTypes) {
            work_list.push(enumMember);
        }
        return work_list.join('\n');
    }
    
    const WORK_LIST = getWorkList(workTypes);

    function validWork(work: string): boolean{
        for (let enumMember in workTypes) {
            if (enumMember == work){
               return true;
            }
        }
        return false;
    }

    export abstract class Work {
        protected getWork(): string {
            let current_work: string;

            let isValid = true;
            while (isValid) {
                current_work = prompt(`Current Vacations:\n${WORK_LIST}`,``);
                if (validWork(current_work)) {
                    isValid = false;
                }      
            }   
            return current_work;
        }
    }
}


