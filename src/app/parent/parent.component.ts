import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  @ViewChild(ChildComponent) child :ChildComponent;

  name:string="Hello child im parent";

  childDate:any;

  ngOnInit(): void {
    //this.child.printMessage()
  }

  ngAfterViewInit()
  {
    this.child.printMessage()
  }

}
