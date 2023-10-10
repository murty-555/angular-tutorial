import { Component } from '@angular/core';

@Component({
  selector: 'app-s-binding',
  templateUrl: './s-binding.component.html',
  styleUrls: ['./s-binding.component.css']
})
export class SBindingComponent {
  public myColor: string = 'blue';
  public isRequired: boolean = true;
  public myStyleGroup = {
    color: 'green',
    fontSize: '48px',
    fontStyle: 'italic'
  }
}
