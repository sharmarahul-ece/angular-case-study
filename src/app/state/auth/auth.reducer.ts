import { createReducer, on, Action } from "@ngrx/store";
import { login, logout } from "./auth.actions";


export const initialState = true;

const authReducer = createReducer(
    initialState,
    on(login, state => state = true),
    on(logout, state => state = false)
);

export function AuthReducer(state : boolean, action: Action){
    return authReducer(state, action);
}