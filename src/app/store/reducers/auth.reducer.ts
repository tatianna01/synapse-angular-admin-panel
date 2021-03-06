import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions/auth.actions";
import { authState } from "../state/auth.state";

export const authReducer = createReducer(
    authState,
    on(AuthActions.register, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
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
    on(AuthActions.updateNotifications, (state, { notifications }) => ({
        ...state,
        notifications: notifications
    })),
    on(AuthActions.login, (state, { user }) => ({
        ...state,
    })),
    on(AuthActions.changeIcon, (state, { icon, id }) => ({
        ...state,
        users: state.users.map(user => 
            user.id === id ? {
                ...user, 
                icon: icon
            }: user),
    })),
    on(AuthActions.removeIcon, (state, { id }) => ({
        ...state,
        users: state.users.map(user => 
            user.id === id ? {
                ...user, 
                icon: `../../../assets/images/default.png`
            }: user),
    })),
  );