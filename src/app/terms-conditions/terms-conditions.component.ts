import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent {
  showContent: boolean = false
  readMore(){
    if(this.showContent == false){
      this.showContent = true
    }else{
      this.showContent = false
    }
  }
}
