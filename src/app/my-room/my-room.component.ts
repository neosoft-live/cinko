import { Component } from '@angular/core';

@Component({
  selector: 'app-my-room',
  templateUrl: './my-room.component.html',
  styleUrls: ['./my-room.component.css'],
})
export class MyRoomComponent {


  showAddRoomPopup:boolean = false;
  showsuccessPopup:boolean = false;
  showRoomAvailablePopup:boolean = false;
  showDeleteRoomPopup:boolean = false;


  addroompopup(){
      if(this.showAddRoomPopup == false){
        this.showAddRoomPopup = true
      } else{
        this.showAddRoomPopup = false
      }
  }
  addsuccesspopup(){
      if(this.showsuccessPopup == false){
        this.showsuccessPopup = true
      } else{
        this.showsuccessPopup = false
      }
  }
  addroomavailablepopup(){
      if(this.showRoomAvailablePopup == false){
        this.showRoomAvailablePopup = true
      } else{
        this.showRoomAvailablePopup = false
      }
  }
  deleteroompopup(){
      if(this.showDeleteRoomPopup == false){
        this.showDeleteRoomPopup = true
      } else{
        this.showDeleteRoomPopup = false
      }
  }
}
