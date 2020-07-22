import { createReducer, on, Action } from "@ngrx/store";
import { open, close, toggle } from "./side-nav.actions";


export const initialState = true;

const sideNavReducer = createReducer(
    initialState,
    on(open, state => state = true),
    on(close, state => state = false),
    on(toggle, state => state = !state),

);

export function SideNavReducer(state : boolean, action: Action){
    return sideNavReducer(state, action);
}