import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  public demoResult;
  public locations = ["Pune", "Bangalore", "Chennai"]
  userModel = new User('','ghana@gmail.com','Pune',false)
}
