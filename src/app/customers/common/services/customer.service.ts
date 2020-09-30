import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { CustomerResponse } from '../models/customerResponse.model';

@Injectable()
export class CustomerService {


  constructor(private _http: HttpClient) {
  }

  getCustomers(): Observable<CustomerResponse> {
    return this._http.get<CustomerResponse>(`${environment.baseApiUrl}/customers`); // Skipping auto retries when the request fails
  }

}
