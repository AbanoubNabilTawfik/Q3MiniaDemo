import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  errorMessage:string="";
  ngOnInit(): void {
    this.employeeService.postForm().subscribe(
      response=>{
      console.log(response)
    },error=>{
      this.errorMessage=error
    })
  }

}
