export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  
  public constructor (id: string, firstName: string, lastName: string, email : string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  
}