export interface Budget {
    amount: number;
    interest: number;
}

export interface Users {
    amount: number;
    interest: number;
}

export interface Profit {
    amount: number;
    interest: number;
}

export interface DashboardStateModel {
    budget: Budget;
    users: Users;
    progress: number;
    profit: Profit;
}

export const dashboardState: DashboardStateModel = {
   budget: {
       amount: 24000,
       interest: 12
   },
   users: {
       amount: 1600,
       interest: 16
   },
   progress: 75.5,
   profit: {
    amount: 23200,
    interest: 16
   }
}
