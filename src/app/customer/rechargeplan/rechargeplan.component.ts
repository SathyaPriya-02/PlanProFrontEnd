import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rechargeplan',
  templateUrl: './rechargeplan.component.html',
  styleUrls: ['./rechargeplan.component.css'],
})
export class RechargeplanComponent {
  plans: any;
  searchText: any;
  searchResults: any[] = [];

  constructor(private uService: UserService, private router: Router) {
    this.uService.getPlans().subscribe((planlist: any) => {
      this.plans = planlist;
      console.log(this.plans);
    });
  }

  onPay(planPrice: number) {
    this.router.navigate(['/debit-card'], { queryParams: { price: planPrice } });
  }

  onSubmit() {
    this.uService.searchPlans(this.searchText).subscribe((result: any) => {
      this.searchResults = result;
      //localStorage.setItem('plandata', JSON.stringify(result));
      console.log(this.searchResults)
    });
  }

  receivedData: any;

  // ngOnInit(): void {
  //   const storedData = localStorage.getItem('plandata');
  //   if (storedData) {
  //     this.receivedData = JSON.parse(storedData);
  //   }
  // }
}
