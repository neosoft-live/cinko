import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-aside',
  templateUrl: './admin-aside.component.html',
  styleUrls: ['./admin-aside.component.css']
})
export class AdminAsideComponent {
  showMyContainer: boolean = false;
  public pageactive: string = "/dashboard";


  constructor(private router:Router){
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        this.pageactive = val.url;

        switch(this.pageactive){
          case "/add-new-hotel":
            this.pageactive = "/hotels-list";
        }
        console.log(this.pageactive);
      }
    })
  }
  
}
