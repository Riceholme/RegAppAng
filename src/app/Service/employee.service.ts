import {HttpClient} from "@angular/common/http";
import {Employee} from "../Models/employee.model";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    baseUrl='https://localhost:7031/api/employee';
    constructor(private http:HttpClient) {}

    //GET
    getAllEmployees():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl);
    }
    //GET
    getEmpsByDepartId(id:number):Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl + '/' + id);
    }
    //GET
    getEmpById(id:number):Observable<Employee>{
        return this.http.get<Employee>(this.baseUrl + '/' + id);
    }
    getEconomyEmps():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl + '/' + 'economyemployees');
    }
    getItEmps():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl + '/' + 'itemployees');
    }
    getMarketingEmps():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl + '/' + 'marketingemployees');
    }
    getSalesEmps():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl + '/' + 'salesemployees');
    }
    //POST
    newwEmployee(employee:Employee):Observable<Employee>{
        return this.http.post<Employee>(this.baseUrl, employee);
    }
    //DELETE
    deleteEmployee(id:number):Observable<Employee>{
        return this.http.delete<Employee>(this.baseUrl + '/' + id);
    }
    //PUT
    updateEmployee(employee:Employee):Observable<Employee>{
        return this.http.put<Employee>(this.baseUrl, employee);
    }
    // updateEmployee(employee:Employee):Observable<Employee>{
    //     return this.http.put<Employee>(this.baseUrl + '/' + employee.id, employee);
    // }
}