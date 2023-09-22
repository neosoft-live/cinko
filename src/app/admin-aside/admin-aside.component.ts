import { Component,Input, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-admin-aside',
  templateUrl: './admin-aside.component.html',
  styleUrls: ['./admin-aside.component.css']
})
export class AdminAsideComponent {
  showMyContainer: boolean = false;
  public pageactive: string = "/dashboard";
  

  constructor(private router:Router,private globleservices:GlobalServiceService){
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


    // this.showMyContainer = this.globleservices.asideGlobalVariable;

  }


  ngOnInit(): void {
    this.globleservices.selectedProduct$.subscribe((value) => {
      this.showMyContainer = value;
    });
  }

  public ngOnChanges(changes:SimpleChanges){
    console.log(changes);

    this.globleservices.selectedProduct$.subscribe((value) => {
      this.showMyContainer = value;
    });
  }
}
