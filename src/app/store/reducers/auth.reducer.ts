import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions/auth.actions";
import { authState } from "../state/auth.state";

export const authReducer = createReducer(
    authState,
    on(AuthActions.register, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
        loggedInUser: user
    })),
    on(AuthActions.createUser, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
    })),
    on(AuthActions.updateUser, (state, { user }) => ({
        ...state,
        users: state.users.map(res => res.id === user.id ? {
            ...res,
            ...user
        }: res)
    })),
    on(AuthActions.login, (state, { user }) => ({
        ...state,
        loggedInUser: user
    })),
    on(AuthActions.logout, (state) => ({
        ...state,
        loggedInUser: null
    })), 
  );