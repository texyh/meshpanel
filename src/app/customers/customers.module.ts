import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerService } from './common/services/customer.service';
import { CreateLimitedPaymentComponent } from './create-limited-payment/create-limited-payment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerListComponent, CreateLimitedPaymentComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }
