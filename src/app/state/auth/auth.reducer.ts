import { createReducer, on, Action } from "@ngrx/store";
import { login, logout, loginSuccess } from "./auth.actions";


export const initialState = false;

const authReducer = createReducer(
    initialState,
    on(login, (state, { username, password }) => {
        return state;
    }),
    on(logout, state => {
        return false;
    }),
    on(loginSuccess, (state, { isSuccess }) => {
        return isSuccess;
    })
);

export function AuthReducer(state : boolean, action: Action){
    return authReducer(state, action);
}