import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedsourceService } from 'src/app/service/sharedsource.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-myuseraccount',
  templateUrl: './myuseraccount.component.html',
  styleUrls: ['./myuseraccount.component.css']
})
export class MyuseraccountComponent  implements OnInit{

  userDetail : any ='';
  phoneNumber : any='';
  userdata : any

  constructor(private uService: UserService , private sharedService: SharedsourceService,private router: Router) 
  {
      
      this.phoneNumber = this.sharedService.getPhoneNumber(); // Get the phone number from the shared service
      console.log(this.phoneNumber);
      this.uService.getUserDetail(this.phoneNumber).subscribe((user: any) => {
        this.userDetail = user;
        localStorage.setItem("userdata",JSON.stringify(this.userDetail))
        console.log(this.userDetail);
      });
      

      
    
  }

  recievedData : any;
    ngOnInit(): void {
      const storedData = localStorage.getItem("userdata");
      if(storedData)
      {
        this.recievedData = JSON.parse(storedData);
        console.log(this.recievedData)
      }
    } 
    

}
