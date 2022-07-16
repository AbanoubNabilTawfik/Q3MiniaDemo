import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binidng',
  templateUrl: './data-binidng.component.html',
  styleUrls: ['./data-binidng.component.scss']
})
export class DataBinidngComponent implements OnInit {

  constructor() { }

  fullName:string="Abanoub Nabil"
  url:string=window.location.href;
  textId:string="myId2";
  isDisabled:boolean=false;
  hasError:boolean=false;

  hasSpecial:boolean=true;

  colorStyle:string="red"

  messageClasses={
    "text-danger":this.hasError,
    "text-success":!this.hasError,
    "text-special":this.hasSpecial
  }

  styleObject={
    color:"orange",
    fontStyle:"italic"
  }

  textColor:string="text-danger"

  ngOnInit(): void {
  }

}
