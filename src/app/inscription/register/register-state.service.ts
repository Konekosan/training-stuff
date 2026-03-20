import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterStateService {

  private data: any = {};

  constructor() { }

  setData(step: string, value: any){
    this.data[step] = value;
  }

  getData() {
    return this.data;
  }

  clear(){
    this.data = {};
  }

}
