import { Component } from '@angular/core';
import { Employee } from './Models/employee.model';
import { EmployeeService } from './Service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegApp_Ang';

  employees: Employee[] = [];

  employee: Employee = {
    id: 0,
    firstName:'',
    lastName:'',
    gender:'',
    email:'',
    phoneNumber:'',
    adress:'',
    salary: 0,
    departmentId:0
  }
  // economEmps = this.employeeService.getEmpsByDepartId(1);
  // itEmps = this.employeeService.getEmpsByDepartId(2);
  // marketEmps = this.employeeService.getEmpsByDepartId(3);
  // salesEmps = this.employeeService.getEmpsByDepartId(4);
  
  economyemployees: Employee [] = [];
  itemployees: Employee [] = [];
  marketemployees: Employee [] = [];
  salesemployees: Employee [] = [];
  saleemployee: Employee = {
    id: 0,
    firstName:'',
    lastName:'',
    gender:'',
    email:'',
    phoneNumber:'',
    adress:'',
    salary: 0,
    departmentId:0
  };
  // markettest: Employee [] = [].filter((x) => this.employee.departmentId === 3);
  // salesarr1: Employee [] = this.employeeService.getEmpsByDepartId(3);
  // salesarr2 = this.employee.filter(x => x.departmentId === 4);
  // salesarr = this.employeeService.getEmpsByDepartId(4);

  // marketemp: Employee = {
  //   id: 0,
  //   firstName:'',
  //   lastName:'',
  //   gender:'',
  //   email:'',
  //   phoneNumber:'',
  //   adress:'',
  //   salary: 0,
  //   departmentId:3
  // }

  constructor(private employeeService : EmployeeService)
  {

  }

ngOnInit():void{
  // this.getAllEmploys();
  this.getAllEconomy();
  this.getAllIt();
  this.getAllMarketing();
  this.getAllSales();
}

//GET
  getAllEmploys(){
    this.employeeService.getAllEmployees()
    .subscribe(
      response =>
      {
        this.employees = response;
      }
    );
  }
  //POST
  onSaveBtn(){
    if(this.employee.id == 0){
      this.employeeService.newwEmployee(this.employee)
      .subscribe
      (
        response => {
          this.getAllEmploys();
          this.employee = {
            id: 0,
    firstName:'',
    lastName:'',
    gender:'',
    email:'',
    phoneNumber:'',
    adress:'',
    salary: 0,
    departmentId:0
          }
        }
      );
      
    }
    else{
      this.updejtEmployee(this.employee);
    }
  }
  //GET
  getAllEmploysByDepId(id:number){
    this.employeeService.getEmpsByDepartId(id)
    .subscribe(
      response =>
      {
        this.salesemployees = response;
      }
    );
    
  }
  getAllEconomy(){
    this.employeeService.getEconomyEmps()
    .subscribe(
      response =>
      {
        this.economyemployees = response;
      }
    );
  }
  getAllIt(){
    this.employeeService.getItEmps()
    .subscribe(
      response =>
      {
        this.itemployees = response;
      }
    );
  }
  getAllMarketing(){
    this.employeeService.getMarketingEmps()
    .subscribe(
      response =>
      {
        this.marketemployees = response;
      }
    );
  }
  getAllSales(){
    this.employeeService.getSalesEmps()
    .subscribe(
      response =>
      {
        this.salesemployees = response;
      }
    );
  }
  



  //PUT
  updejtEmployee(employee:Employee){
    this.employeeService.updateEmployee(this.employee)
    .subscribe
    (
      response => {
        this.getAllEmploys();
      }
    );
  }

  onDelete(id:number){
    this.employeeService.deleteEmployee(id)
    .subscribe(
      response => {
        this.getAllEmploys();
      }
    );
  }

  populateForm(employee:Employee){
    this.employee = employee;
  }
}
