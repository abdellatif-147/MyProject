import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class contactComponent implements OnInit {

  public contactdata = {};
  public userauthenticated = false;
  public id = {}
  constructor(public myUserService: UserService, public myRouter: Router) {
    this.id = JSON.parse(localStorage.getItem('Array'))
    this.myUserService
      .getuserbyid({ id : this.id })
      .subscribe((Response: any) => {
      
        if (Response.message === "authentication failed") {
          
          this.myRouter.navigate(["user/signin"]);
        } else {
          
          this.contactdata = Response.user;

          this.userauthenticated = true;
        }
      });
  }

  ngOnInit() {
  }

}
