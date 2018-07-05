import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';


@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User(null, null, null, null);
  constructor(private router: Router, private userService: UserService) {


  }

  createUser(): void {
    //alert(this.user.email);
   this.userService.createUser(this.user);
    // alert("User created successfully." +  this.user);
        /*.subscribe( data => {
          alert("User created successfully.");
        });*/

  };

}