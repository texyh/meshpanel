import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Customer } from '../common/models/customer.model';
import { CustomerService } from '../common/services/customer.service';

import { CustomerListComponent } from './customer-list.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
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
  const mockCustomerService = {
    getCustomers: () => {
      return of({customers});
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      providers: [{provide: CustomerService, useValue : mockCustomerService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch customers on init', () => {
    expect(component.customers.length).toBe(customers.length);
    expect(component.customers[0].displayName).toBe("john Doe")
    expect(component.customers[0].contactPerson).not.toBeNull()
    expect(component.customers[0].financialAdmins).toContain("test@example.com")
  })
});
