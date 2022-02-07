import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

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
    
    export const login = createAction(
        '[AUTH] login user',
        props<{ user: User }>()
    );
    
    export const logout = createAction(
        '[AUTH] login user'
    );
}