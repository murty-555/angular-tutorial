import { Component } from '@angular/core';

@Component({
  selector: 'app-c-binding',
  templateUrl: './c-binding.component.html',
  styleUrls: ['./c-binding.component.css']
})
export class CBindingComponent {
  public myText: string = "textColor";
  public myStyle: string = "style-hover";
  isRequired: boolean = true;
  myClassGrp = {
    textColor: true,
    textSize: true
  }
  myStyleGrp={
    styleHover: true,
    textColor: false,
    textSize: true
  }
}
