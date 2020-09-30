import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLimitedPaymentComponent } from './create-limited-payment/create-limited-payment.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
    path : '',
    component : CustomerListComponent,
  },
  {
    path : 'create-limited-payment',
    component: CreateLimitedPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
