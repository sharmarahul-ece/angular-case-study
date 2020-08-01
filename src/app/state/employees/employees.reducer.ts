import { Employee } from './../../shared/employee.model';
import { createReducer, on, Action, State } from "@ngrx/store";
import * as empActions from "./employees.actions";


export const initialState: Array<Employee> = [];

const employeeReducer = createReducer(
    initialState,
    on(empActions.load, (state, { employees }) => {
        return employees.map(e => {
            let ne = new Employee();
            Object.assign(ne, e);
            return ne;
        })
    }),
    on(empActions.getAll, state => {
        return [...state];
    }),
    on(empActions.add, (state, { employee }) => [...state, employee]),
    on(empActions.remove, (state, { eCode }) => {
        const newState = [...state];
        const ind = newState.findIndex( (f: Employee) => f.eCode === eCode);
        if (ind > -1)
            newState.splice(ind, 1); 
        return newState;
    }),
    on(empActions.update, (state, { eCode, employee}) => {
        const newState = [...state];
        const ind = newState.findIndex( (f: Employee) => f.eCode === eCode);
        if (ind > -1)
            newState.splice(ind, 1, employee); 
        return newState;
    })
);

export function EmployeesReducer(state : Employee[], action: Action){
    return employeeReducer(state, action);
}