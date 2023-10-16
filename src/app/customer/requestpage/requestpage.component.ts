import { Component } from '@angular/core';
import { requestusers } from 'src/app/model/requestusers';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './requestpage.component.html',
  styleUrls: ['./requestpage.component.css']
})
export class RequestpageComponent {

      user : requestusers = new requestusers('','','','','','','','','','','');
      submitted: boolean = false;
      simCount: number=1;
      

      constructor(private uservice : UserService){}

      onSubmit()
      {
        console.log(this.user.emailid)
        this.uservice.sendMail(this.user.emailid).subscribe((response)=>
        { this.user.phonenumber = response.phoneNumber;
          this.user.simnumber = response.simNumber;
          console.log("phn "+this.user.phonenumber);
          console.log("sim "+this.user.simnumber);
        this.uservice.addUser(this.user).subscribe((response)=>{this.submitted=true});
        console.log(this.user);});
      }


      

      decreaseSimCount() {
        if (this.user.simCount > 0) {
          this.user.simCount--;
        }
      }
      
      increaseSimCount() {
        this.user.simCount++;
      }
      

}
