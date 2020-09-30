import { Component, OnInit } from '@angular/core';
import { LimitedPayment } from '../common/models/limitedPayment.model';

@Component({
  selector: 'app-create-limited-payment',
  templateUrl: './create-limited-payment.component.html',
  styleUrls: ['./create-limited-payment.component.css']
})
export class CreateLimitedPaymentComponent implements OnInit {

  private localStorageKey = "payment::method";

  public payment: LimitedPayment = {
    name : "",
    userId : "",
    Amount : 0,
    customAttributes: {},
    expirationDate: (new Date()).toDateString()
  }

  public customAttributes: string;

  private _window: Window;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
  }

}
