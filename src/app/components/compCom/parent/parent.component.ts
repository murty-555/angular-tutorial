import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public pData: string = "This is from parent component";
  public parentMessage: string = "Message from parent";
  public pObjData = {
    id: 1,
    username: 'Ghana',
    password: 'ghana@555'
  }
  public dataFromChild: string
  public childrenData;
  public msgFromChild;
}
