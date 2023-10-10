import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {
  onClick(){
    console.log("You clicked the button")
  }
  onDblClick(){
    console.log("You double clicked the button")
  }
  onMouseOver(){
    console.log("Mouse over")
  }
  onMouseOut(){
    console.log("Mouse out")
  }
  onMouseMove(){
    console.log("Mouse move")
  }
  kDown(){
    console.log("key down")
  }
  kUp(){
    console.log("key up")
  }
  kPress(){
    console.log("key press")
  }
  onFocus(){
    console.log("focus or focus in")
  }
  onBlur(){
    console.log("blur or focus out")
  }
}
