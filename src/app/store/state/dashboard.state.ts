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
    graphdataPhone: number[];
    graphdataLaptop: number[];
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
   },
   graphdataPhone: [15700, 4300, 18000, 24000, 27000, 16500, 0],
   graphdataLaptop:[10500, 19500, 7000, 28000, 28000, 22500, 0]
}
