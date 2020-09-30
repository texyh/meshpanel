import { async, inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { CustomerService } from './customer.service';
import { Customer } from '../models/customer.model';
import { environment } from 'src/environments/environment';

describe('CustomerService', () => {
  
  const customers: Customer[] = [
    {
      identifier: "some-id",
      displayName: "john Doe",
      contactPerson:
      {
        fullName: "Carl Max",
        username: "Carl"
      }
      ,
      financialAdmins: ["test@example.com"]
    }
  ]
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CustomerService]
  }));

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });

  it('should get customers', async(
    inject(
      [CustomerService, HttpTestingController],
      (service: CustomerService, backend: HttpTestingController) => {
        service.getCustomers().subscribe(result => {
          expect(result.customers.length).toBe(customers.length);
          expect(result.customers[0].displayName).toBe("john Doe")
          expect(result.customers[0].contactPerson).not.toBeNull()
          expect(result.customers[0].financialAdmins).toContain("test@example.com")
        });
        backend.expectOne(`${environment.baseApiUrl}/customers`).flush({customers});
      }
    )
  ));

});
