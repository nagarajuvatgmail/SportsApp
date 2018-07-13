import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

import { AlertService } from '../alerts/alert.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User(null, null, null, null);
  constructor(private router: Router, private userService: UserService, private alertService: AlertService) {


  }

  createUser(): void {
      //this.userService.createUser(this.user);
      this.userService.createUser(this.user).subscribe( data => {
          //alert("User created successfully.");
          this.alertService.success('User added successfully !!');
          this.clearUserForm();
      });
  };
  
  clearUserForm(): void{
    this.user.email='';
    this.user.firstName='';
    this.user.lastName='';
  };

}