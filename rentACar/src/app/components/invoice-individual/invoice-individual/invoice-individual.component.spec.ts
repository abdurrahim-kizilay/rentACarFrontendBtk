import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIndividualComponent } from './invoice-individual.component';

describe('InvoiceIndividualComponent', () => {
  let component: InvoiceIndividualComponent;
  let fixture: ComponentFixture<InvoiceIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
