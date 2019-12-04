import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { contactComponent } from './contactus/contact.component';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { UserService } from './user.service';

@NgModule({
    imports: [RouterModule.forChild([
        {path:'user/signin',component:SigninComponent},
        {path:'user/contact', component:contactComponent },
        {path:'user/signup',component:SignupComponent},
        {path:'user/profile',component:ProfileComponent}
]),MatInputModule,MatButtonModule ,HttpClientModule ,FormsModule ,CommonModule 
],
    exports: [RouterModule],
    declarations: [ SignupComponent,
        SigninComponent, 
        ProfileComponent, 
        contactComponent
    ],
    providers: [UserService],
    bootstrap:[SigninComponent]
})
export class usermodel { }
