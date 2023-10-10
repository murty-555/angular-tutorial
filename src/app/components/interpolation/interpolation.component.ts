import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  public name: string = "Ghana"

  emp = {
    firstName: 'Chaitu',
    lastName: '',
    age: 26,
    empId: 100
  }

  public empList = [
    {
      name: 'mohan',
      age: 26
    },
    {
      name: 'karthik',
      age: 25
    }
  ]

  public imageUrl = ''

  getMyName(){
    return `${this.name}`;
  }
}
