import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public pPostman;
  @Input() public pObjPostman;
  @Input() public messageFromParent;
  @Output() public childMessage = new EventEmitter();
  // @Output() public cData = new EventEmitter();
  // sendData(){
  //   this.cData.emit("This is child data")
  // }
  public GameData = {
    Game: 'BGMI',
    Players: 100,
    Map: 'Erangel',
    Tropy: 'Winner Winner Chicken Dinner'
  }
  @Output() public childData = new EventEmitter();
  onClick(){
    this.childData.emit(this.GameData)
  }
  onSend(){
    this.childMessage.emit("Message from child")
  }
}
