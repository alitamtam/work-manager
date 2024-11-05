import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'], // Fix the property name from styleUrl to styleUrls
  imports: [CommonModule, ] // Add HttpClientModule here
})
export class AppComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {

        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
