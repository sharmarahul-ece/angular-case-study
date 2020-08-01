import { Employee } from './../../shared/employee.model';
import { createAction, props } from "@ngrx/store";

export const getAll = createAction('[Employees] GetAll');
export const load = createAction('[Employees] LoadEmployees', props<{ employees: Employee[]}>());
export const add = createAction('[Employees] Add', props<{employee: Employee}>());
export const remove = createAction('[Employees] Delete', props<{eCode: string}>());
export const update = createAction('[Employees] Update', props<{ eCode: string, employee: Employee}>());