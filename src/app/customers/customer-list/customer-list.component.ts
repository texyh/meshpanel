import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../common/models/customer.model';
import { CustomerResponse } from '../common/models/customerResponse.model';
import { CustomerService } from '../common/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public subscription: Subscription;

  public customers: Customer[];

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this.subscription = this._customerService.getCustomers().subscribe(response => {
      this.customers = response.customers;
    }, err => {
      console.log(err)// This could have been a modal or taost, but i skipped it.
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
