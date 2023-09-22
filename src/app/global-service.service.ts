import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  // asideGlobalVariable:boolean = false
  // constructor() {
  //   console.log("ds",this.asideGlobalVariable);
  //  }

  private asideGlobalVariable$ = new BehaviorSubject<boolean>(false);
  selectedProduct$ = this.asideGlobalVariable$.asObservable();

  setProduct(product: any) {
    this.asideGlobalVariable$.next(product);
  }

}
