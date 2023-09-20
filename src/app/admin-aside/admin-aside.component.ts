import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-aside',
  templateUrl: './admin-aside.component.html',
  styleUrls: ['./admin-aside.component.css']
})
export class AdminAsideComponent {
  showMyContainer: boolean = true;
  public pageactive: string = "dashboard";


  ngOnInit(){
    console.log(this.pageactive);
  }


    navigateto(){
      this.pageactive='hotels-list'
    }
}
