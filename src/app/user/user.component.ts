import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';
import { AlertService } from '../alerts/alert.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users: User[];
  
  constructor(private router: Router, private userService: UserService, private alertService: AlertService) {

  }

  ngOnInit() {
      this.userService.getUsers().subscribe( data => {
          this.users = data;
      });
    //this.users = this.userService.getUsers();
  };

  deleteUser(user: User): void {
      //this.userService.deleteUser(user);
      this.userService.deleteUser(user).subscribe( data => {
          this.users = this.users.filter(u => u !== user);
          //alert("User deleted successfully.");
          this.alertService.info('User ' + user.firstName + ' ' + user.lastName + ' deleted successfully !!');
      });
      
  };

}
