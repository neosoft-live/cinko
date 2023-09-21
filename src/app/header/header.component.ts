import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  activepage:string = 'home';


  constructor(private router:Router){
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        this.activepage = val.url;
        console.log(this.activepage);
      }
    })
  }
}
