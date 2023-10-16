import { Injectable } from '@angular/core';
import { requestusers } from '../model/requestusers';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  phonenumber : string = '';
  email:string='';

  url : string ='http://localhost:9191'
  searchResults: any;

  constructor(private httpClient:HttpClient) { }
  sendMail(email_id: string):Observable<any> {
   console.log("service"+email_id);
   //console.log(this.httpClient.post('http://localhost:9191/user/sendmail',email_id))
   return this.httpClient.post('http://localhost:9191/user/sendmail',email_id);
  }

  addUser(newUser : requestusers)
  {
    return this.httpClient.post('http://localhost:9191/user/newuser',newUser);
  }

  generateOtp(phoneNumber:string,email:string)
  {
    const body={phoneNumber,email}
    return this.httpClient.post('http://localhost:9191/requestotp',body)
  }

  validateOtp(otpAndPhoneNumber:any):Observable<Boolean> {
    // Send the entered OTP and phone number to the server for validation
    // console.log(this.httpClient.post<boolean>('http://localhost:8035/validateotp', otpAndPhoneNumber));
    return this.httpClient.post<Boolean>('http://localhost:9191/validateotp', otpAndPhoneNumber);

  }

  getUserDetail(phoneNumber : string)
  {
    
    return this.httpClient.get<requestusers>(`http://localhost:9191/user/detail/${phoneNumber}`);
  }
  

  getPlans()
  {
    return this.httpClient.get('http://localhost:9191/user/plan')
  }

  logout()
  {
    localStorage.removeItem("userdata");
  }

  searchPlans(searchText : string)
  {
    return this.httpClient.get(`http://localhost:9191/user/searchplan/${searchText}`)
  }


  


}
