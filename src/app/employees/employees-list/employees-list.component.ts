import { update, add, remove, getAll } from './../../state/employees/employees.actions';
import { Employee } from './../../shared/employee.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

@Component({
  selector: 'acs-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  displayedColumns: string[] = ['eCode', 'firstName', 'lastName', 'designation', 'actions'];
  dataSource = new MatTableDataSource<Employee>();
  isAddActive = false;
  SelectedRow: Employee = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private readonly store: Store<{employees: Employee[]}>){
    store.select('employees').subscribe(emps => {
      this.dataSource.data = emps;
      })
  }

  ngOnInit() {
    this.store.dispatch(getAll());
    this.dataSource.paginator = this.paginator;
  }

  rowClick(employee: Employee){
    this.SelectedRow = employee;
  }

  onUpdate(employee: Employee){
    this.store.dispatch(update({ eCode: employee.eCode, employee }));
    this.SelectedRow = null;
  }
  
  onAdd(employee: Employee){
    this.store.dispatch(add({ employee }));
    this.isAddActive = false;
  }

  onUpdateCancel(){
    this.SelectedRow = null;
  }
  
  onAddCancel(){
    this.isAddActive = false;
  }

  onRemove(eCode: string) {
    this.store.dispatch(remove({ eCode }));
    this.SelectedRow = null;
  }

}
