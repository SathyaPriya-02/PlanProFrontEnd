import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent {

  constructor(private uService:UserService ,public router:Router){}
  logout()
  {
    this.uService.logout();
    this.router.navigate(['']);
   
  }
}
