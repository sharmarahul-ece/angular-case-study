import { Employee } from './../../shared/employee.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'acs-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input('Employee') set employee(val: Employee) { 
    this._employee = val; 
    if (this.employee != null)
      this.employeeForm.setValue(this._employee);
  };
  get employee() {
    return this._employee;
  }

  @Input('isEdit') isEdit = false;
  @Output() Save = new EventEmitter<Employee>();
  @Output() Cancel = new EventEmitter();

  _employee: Employee;

  employeeForm = new FormGroup({
    eCode: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(''),
    designation: new FormControl('', [Validators.required, Validators.maxLength(50)])
  });

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.employee != null)
      this.employeeForm.setValue(this.employee);
  }

  ngOnInit(): void {
    if (this.isEdit)
      this.employeeForm.controls['eCode'].disable();
  }

  onSubmit(e: any){
    e.preventDefault();
    // console.log(this.employeeForm);
    if (this.employeeForm.invalid) return;
    let data = new Employee();
    const v = this.employeeForm.getRawValue();
    Object.assign(data, v);
    this.Save.emit(data);
  }

  onCancel(){
    this.Cancel.emit();
  }

  isError(field: string, error: string){
    const c = this.employeeForm.controls[field];
    return c.errors == null || c.errors[error] == null ? false : true;
  }
}
