import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // @Input() parentData="";
  @Input('parentData') name ="";

  @Output() childEvent= new EventEmitter();


  ngOnInit(): void {
  }

  sendDataToParent()
  {
    this.childEvent.emit("Hello parent im child")
  }

  printMessage()
  {
    console.log("Hello parent im child")
  }

}
