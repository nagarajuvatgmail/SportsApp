import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  users:User[];

  constructor(private http: HttpClient) {
    var user1:User = new User("1", "Ram", "Narayan", "ram.narayan@mail.com");
    var user2:User = new User("2", "Lakshman", "Kumar", "lakshman.kumar@mail.com");
    var user3:User = new User("3", "Bharat", "Raja", "bharata.raja@mail.com");
    var user4:User = new User("4", "krishna", "vasu", "krishna.vasu@mail.com");
        
    this.users = [user1];
    this.users.push(user2)
    this.users.push(user3);
    this.users.push(user4);
  }

  //private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = '/api';

  public getUsers() {
    
    //return this.http.get<User[]>(this.userUrl);
    return this.users;
  }

  public deleteUser(user: User) {
    //alert(user.email);
    //return this.http.delete(this.userUrl + "/" + user.id);
    this.users.forEach((item, index) => {
      if(item.id == user.id){
        this.users.splice(index, 1);
      }
      
    });
    
    
    //this.users.pop();
  }

  public createUser(user) {
    this.users.push(user);
    return this.users;
    //return this.http.post<User>(this.userUrl, user);
  }

}