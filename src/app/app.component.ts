import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-8';
  employees: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  itemsPerPageOptions = [5, 10, 15, 20];
  totalPages!: number;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // this.employees = this.employeeService.getEmployees();
    this.employeeService.getEmployeeData().subscribe(responseData => {
      this.employees = responseData.data;
    });
  }

  get pages() {
    this.totalPages = Math.ceil(this.employees.length / this.itemsPerPage);
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onItemsPerPageChange() {
    this.totalPages = Math.ceil(this.employees.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }
}
