import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.component.html',
  styleUrls: ['./debitcard.component.css']
})
export class DebitcardComponent {

  price: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.price = +params['price'];
    });
  }
}
