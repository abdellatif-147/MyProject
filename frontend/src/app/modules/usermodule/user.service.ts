import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class UserService {
  constructor(public myHttpClient: HttpClient) {}
  handlesignup(data) {
    return this.myHttpClient.post("/signup", data);
  }
  handlesignin(data) {
    return this.myHttpClient.post("/signin", data , {withCredentials : true } );
  }
  getuserbyid(data) {
    return this.myHttpClient.post('/getuserbyid', data , {withCredentials : true });
  }
  logout(){
    return this.myHttpClient.get('/logout',  { observe :'response' , withCredentials : true } )
  }
} 
