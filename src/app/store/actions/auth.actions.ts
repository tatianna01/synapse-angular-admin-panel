import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { Notifications } from "../state/auth.state";

export namespace AuthActions {
    export const register = createAction(
        '[AUTH] register user',
        props<{ user: User }>()
    );

    export const createUser = createAction(
        '[AUTH] create user',
        props<{ user: User }>()
    );
    
    export const updateUser = createAction(
        '[AUTH] update user',
        props<{ user: User }>()
    );

    export const updateNotifications = createAction(
        '[AUTH] update notifications',
        props<{ notifications: Notifications }>()
    );

    export const changeIcon = createAction(
        '[AUTH] change icon',
        props<{ icon: string, id: string }>()
    );

    export const removeIcon = createAction(
        '[AUTH] remove icon',
        props<{ icon: string, id: string }>()
    );
    
    export const login = createAction(
        '[AUTH] login user',
        props<{ user: User }>()
    );
    
    export const logout = createAction(
        '[AUTH] login user'
    );
}