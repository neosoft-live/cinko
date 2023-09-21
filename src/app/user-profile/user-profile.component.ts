import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  showUpdateProfilePopup: boolean = false
  showUpdatePaymentPopup: boolean = false
  showResetPasswordPopup: boolean = false
  updateProfile(){
    if(this.showUpdateProfilePopup == false){
      this.showUpdateProfilePopup = true
    } else{
      this.showUpdateProfilePopup = false
    }
  }
  updatePayment(){
    if(this.showUpdatePaymentPopup == false){
      this.showUpdatePaymentPopup = true
    } else{
      this.showUpdatePaymentPopup = false
    }
  }
  resetPassword(){
    if(this.showResetPasswordPopup == false){
      this.showResetPasswordPopup = true
    } else{
      this.showResetPasswordPopup = false
    }
  }
  
}
