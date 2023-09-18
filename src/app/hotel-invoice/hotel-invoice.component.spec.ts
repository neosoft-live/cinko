import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInvoiceComponent } from './hotel-invoice.component';

describe('HotelInvoiceComponent', () => {
  let component: HotelInvoiceComponent;
  let fixture: ComponentFixture<HotelInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelInvoiceComponent]
    });
    fixture = TestBed.createComponent(HotelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
