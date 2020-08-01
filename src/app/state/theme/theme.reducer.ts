import { createReducer, on, Action } from "@ngrx/store";
import { toggle } from "./theme.actions";


export const initialState = false;       // true is dark theme.

const themeReducer = createReducer(
    initialState,
    on(toggle, state => state = !state)
);

export function ThemeReducer(state : boolean, action: Action){
    return themeReducer(state, action);
}