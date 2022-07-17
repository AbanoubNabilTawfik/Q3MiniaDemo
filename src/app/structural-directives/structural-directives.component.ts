import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
  displayName:boolean=true;

  isLoggedIn:boolean=true;

  fullName:string="Abanoub Nabil";

  carName:string="Test";

  cars=["TIPO","KIA","HONDA","SPORTAGE"]

  ngOnInit(): void {
  }

}
