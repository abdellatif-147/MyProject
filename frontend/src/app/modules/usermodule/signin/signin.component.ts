import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  public username = "";
  public password = "";
  public error = "";
  public id : any 
  constructor(public myUserService: UserService, public myRouter: Router) {}
  handlesignin() {
    const { username, password } = this;
    if (username && password) {
      this.myUserService
        .handlesignin({ username, password })
        .subscribe((Response: any) => {
        
          if (Response.message === "success") {
            this.id = Response.user._id;
            localStorage.setItem('Array', JSON.stringify(this.id));
            
            this.myRouter.navigate(["/user/profile"]);
          } else {
            this.error = ` user is not found  
            please signup `
          }
        });
    }
  }
  ngOnInit() {}
}
