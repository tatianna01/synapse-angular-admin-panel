import { createFeatureSelector } from "@ngrx/store";
import { DashboardStateModel } from "../state/dashboard.state";

export const selectDashboardFeature = createFeatureSelector<DashboardStateModel>('dashboard');
