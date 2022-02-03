import { createFeatureSelector, createSelector } from "@ngrx/store";
import { dashboardNode, DashboardStateModel } from "../state/dashboard.state";

export const selectDashboardFeature = createFeatureSelector<DashboardStateModel>(dashboardNode);
