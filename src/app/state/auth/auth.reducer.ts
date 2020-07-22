import { createReducer, on, Action } from "@ngrx/store";
import { login, logout } from "./auth.actions";


export const initialState = true;

const sideNavReducer = createReducer(
    initialState,
    on(login, state => state = true),
    on(logout, state => state = false)
);

export function SideNavReducer(state : boolean, action: Action){
    return sideNavReducer(state, action);
}