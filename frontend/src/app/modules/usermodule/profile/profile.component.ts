import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  
  public userauthenticated = false;
  public userid: any;
  public user : any 
  constructor(public myUserService: UserService, public myRouter: Router) {

  }


  ngOnInit() {
    this.userid =JSON.parse(localStorage.getItem('Array'));
    
    this.myUserService
    .getuserbyid({ id: this.userid })
    .subscribe((Response: any) => {
      
      if (Response.message === "authentication failed") {
        this.myRouter.navigate(["user/signin"]);
        
      } else {
        this.user = Response.user;
        this.userauthenticated = true;
      }
    });

  }


  

handlelogout() {
  this.myUserService.logout().subscribe((Response: any) => {});
  localStorage.removeItem('Array');
  
  this.myRouter.navigate(["user/signin"]);}
}
