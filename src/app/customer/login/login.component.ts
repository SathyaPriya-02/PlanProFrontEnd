import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input/public_api';
import { SharedsourceService } from 'src/app/service/sharedsource.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'otp-app';
  
  phoneNumber: any;
  email:any;
  userExists: any;
  
 
 
  constructor(private uService : UserService , private router:Router,private sharedService: SharedsourceService) { }

  generateOtp() {
  if (this.phoneNumber && this.email) {
    console.log(this.phoneNumber);
    console.log(this.email);
    this.uService.phonenumber = this.phoneNumber
    this.uService.email = this.email
    this.sharedService.setPhoneNumber(this.phoneNumber);
    this.uService.generateOtp(this.phoneNumber, this.email).subscribe((response: any) => {
      if (response.exists) {
          this.userExists = true;
          this.router.navigate(['/otp']);
      } else {
          this.userExists = false;
          console.error('User not found');
      }
  });
    }

  }

}

   
