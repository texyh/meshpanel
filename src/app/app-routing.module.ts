import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { HomeComponent } from './layout/home/home.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import("./customers/customers.module").then(x => x.CustomersModule),
  },  
  {

    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
