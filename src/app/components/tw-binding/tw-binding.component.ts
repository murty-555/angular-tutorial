import { Component } from '@angular/core';

@Component({
  selector: 'app-tw-binding',
  templateUrl: './tw-binding.component.html',
  styleUrls: ['./tw-binding.component.css']
})
export class TwBindingComponent {
  public myName: string = '';
  public myDomain: string = '';
  public myEmpid: number = 0;
  public myText: string = '';

  getMyName(val){
    console.log("Welcome: ", val)
    this.myName = val;
  }
  getMyDomain(val){
    console.log("Your domain: ", val)
    this.myDomain = val;
  }
  getMyEmpid(val){
    console.log("Your emp id: ", val)
    this.myEmpid = val
  }
}
