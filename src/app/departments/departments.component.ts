import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router,private activatedRout:ActivatedRoute) { }

  departments=[
    {"id":1 , "name":"Angular"},
    {"id":2 , "name":"React"},
    {"id":3 , "name":"Node JS"},
    {"id":4 , "name":"JavaScript"}

  ]
  selectedId:any;

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get("id");
    })

  }

  gotToDepartmentDetails(id:any)
  {
    //Go to department details and pass the id to this component
    // if(id==1)
    // {

    // }

    this.router.navigate(["/department",id]);
  }

}
