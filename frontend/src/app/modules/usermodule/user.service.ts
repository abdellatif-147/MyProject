import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class UserService {
  constructor(public myHttpClient: HttpClient) {}
  handlesignup(data) {
    return this.myHttpClient.post("/signup", data);
  }
  handlesignin(data) {
    return this.myHttpClient.post("https://abdo-no1.herokuapp.com/signin", data , {withCredentials : true } );
  }
  getuserbyid(data) {
    return this.myHttpClient.post('https://abdo-no1.herokuapp.com/getuserbyid', data , {withCredentials : true });
  }
  logout(){
    return this.myHttpClient.get('https://abdo-no1.herokuapp.com/logout',  { observe :'response' , withCredentials : true } )
  }
} 
