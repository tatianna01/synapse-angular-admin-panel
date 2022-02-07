import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { AuthStateModel, Notifications } from "../state/auth.state";

export const selectAuthFeature = createFeatureSelector<AuthStateModel>('auth');

export const usersSelector = createSelector(
    selectAuthFeature,
    (state: AuthStateModel): User[] => state.users
)

export const loggedInUserSelector = createSelector(
    selectAuthFeature,
    (state: AuthStateModel): User => state.loggedInUser
)

export const notificationsSelector = createSelector(
    selectAuthFeature,
    (state: AuthStateModel): Notifications => state.notifications
)

export const stateSelector = createSelector(
    selectAuthFeature,
    (state: AuthStateModel) => state
)