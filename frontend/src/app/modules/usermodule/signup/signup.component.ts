import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  username = "";
  password = "";
  phone = '' ;
  email = "";
  error = "";

  constructor(public myUserService: UserService, public myRouter: Router) {}
  handlesignup() {
    const { username, password, phone ,email } = this;
    if (username && password && phone && email) {
      this.myUserService
        .handlesignup({ username, password, phone ,email })
        .subscribe((Response: any) => {
          if (Response.message === "error") {
            this.error = "user is exist";
          } else {
            this.myRouter.navigate(["/user/signin"]);
          }
        });
    }
  }

  ngOnInit() {}
}
