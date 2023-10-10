import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name: string = "Pipes tutorial";
  public date = new Date();
  public person = {
    name: 'Ghana',
    designation: 'AirForce Cadet',
    role: 'AirForce'
  }
}
