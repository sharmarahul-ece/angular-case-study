import { createAction } from "@ngrx/store";

export const open = createAction('[Side Nav] Open');
export const close = createAction('[Side Nav] Close');
export const toggle = createAction('[Side Nav] Toggle');