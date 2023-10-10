import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css'],
})
export class ForComponent {
  public mobiles = ['Samsung Galaxy S21 fe 5g', 'Google Pixel 7'];
  public empDetails = [
    {
      id: 1,
      name: 'Emp 1',
      empId: 3105,
    },
    {
      id: 12,
      name: 'Emp 2',
      empId: 3106,
    },
    {
      id: 3,
      name: 'Emp 3',
      empId: 3107,
    },
  ];
  public data = ["one", "two", "three", "four"]
}
