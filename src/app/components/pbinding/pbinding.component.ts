import { Component } from '@angular/core';

@Component({
  selector: 'app-pbinding',
  templateUrl: './pbinding.component.html',
  styleUrls: ['./pbinding.component.css']
})
export class PbindingComponent {
  public name: string = 'Enter any text';
  public id: number = 1;
  public isDisabled: boolean = false;
}
