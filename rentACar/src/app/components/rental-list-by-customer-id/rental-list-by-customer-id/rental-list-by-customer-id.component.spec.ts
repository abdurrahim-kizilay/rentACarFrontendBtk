import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalListByCustomerIdComponent } from './rental-list-by-customer-id.component';

describe('RentalListByCustomerIdComponent', () => {
  let component: RentalListByCustomerIdComponent;
  let fixture: ComponentFixture<RentalListByCustomerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalListByCustomerIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalListByCustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
