import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewHotelComponent } from './add-new-hotel/add-new-hotel.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelInvoiceComponent } from './hotel-invoice/hotel-invoice.component';
import { HotelTicketComponent } from './hotel-ticket/hotel-ticket.component';
import { MyRoomComponent } from './my-room/my-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'signUp',
    component: SignupComponent,
  },
  {
    path: 'signIn',
    component: SigninComponent,
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'add-new-hotel',
    component: AddNewHotelComponent,
  },
  {
    path: 'view-hotel',
    component: ViewHotelComponent,
  },
  {
    path: 'hotels-list',
    component: HotelsListComponent,
  },
  {
    path: 'hotel-booking',
    component: HotelBookingComponent,
  },
  {
    path: 'hotel-invoice',
    component: HotelInvoiceComponent,
  },
  {
    path: 'hotel-ticket',
    component: HotelTicketComponent,
  },
  {
    path: 'my-room',
    component: MyRoomComponent,
  },
  {
    path: 'view-room',
    component: ViewRoomComponent,
  },
  {
    path: 'view-tickets',
    component: ViewTicketsComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
