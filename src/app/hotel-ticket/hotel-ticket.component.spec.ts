import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTicketComponent } from './hotel-ticket.component';

describe('HotelTicketComponent', () => {
  let component: HotelTicketComponent;
  let fixture: ComponentFixture<HotelTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelTicketComponent]
    });
    fixture = TestBed.createComponent(HotelTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
