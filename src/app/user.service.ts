import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  submitData(user:User)
  {
    //calling to the backend  
  }
}
