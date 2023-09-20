import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinko';


  showFooter:boolean = true;
  showHeader:boolean = true;


  constructor(private router:Router){
      router.events.subscribe((val)=>{
        if(val instanceof NavigationEnd){
          if(val.url == '/add-new-hotel' || val.url == "/dashboard" ||
          val.url == '/view-hotel' || val.url == "/hotels-list" ||
          val.url == '/hotel-booking' || val.url == "/hotel-invoice" ||
          val.url == '/hotel-ticket' || val.url == "/my-room" ||
          val.url == '/view-room' || val.url == "/view-tickets" ||
          val.url == '/user-profile'
          ){
            this.showHeader = false;
            this.showFooter = false;
          }else{
            this.showHeader = true;
            this.showFooter = true;
          }
        }
      })
  }

}
