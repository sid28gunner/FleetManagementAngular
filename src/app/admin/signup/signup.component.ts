import { Component} from '@angular/core';
import {userService} from '../admin-shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;

  constructor(private userSVC: userService, private router: Router){}

  signUp(){
    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.userSVC.register(this.email, this.password1);
      this.userSVC.verifyUser();
    }
  }

  cancel(){
    this.router.navigate(['/admin/login']);
  }

  

}
