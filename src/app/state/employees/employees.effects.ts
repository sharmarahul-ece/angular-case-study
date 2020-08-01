import { Employee } from './../../shared/employee.model';
import { getAll, load } from './employees.actions';
import { EmployeesService } from './../../services/employees.service';
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeesEffects {

    constructor(
        private actions$: Actions,
        private employeesService: EmployeesService) {
    }

    loadEmployees$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getAll),
        mergeMap(() => this.employeesService.getAll()
          .pipe(
            tap(console.log),
            map((data: Employee[]) => load( { employees: data })),
            catchError((err) => {
                tap(console.log);
                return EMPTY;
            })
          )
        )
      )
    );
}