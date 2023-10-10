import { Component } from '@angular/core';

@Component({
  selector: 'app-tem-ref-variable',
  templateUrl: './tem-ref-variable.component.html',
  styleUrls: ['./tem-ref-variable.component.css']
})
export class TemRefVariableComponent {
  messageValue = '';
  message(msg){
    console.log(msg)
    this.messageValue = msg
  }
}
