import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }
  fullName:string="Ahmed mamdoh";

  today:Date = new Date();

  ngOnInit(): void {
  }

}
