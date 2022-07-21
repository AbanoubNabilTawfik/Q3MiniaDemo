import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private user:UserService) { }

  userModel:User= new User("","","ab@gmail.com","Angular",true);

  topics=["Angular","React JS","Vue JS"]

  ngOnInit(): void {
  }
  submitForm()
  {
    console.log(this.userModel)
    this.user.submitData(this.userModel);
  }

}
