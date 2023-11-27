import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const materialComponents = [
  MatButtonModule,
  MatSlideToggleModule
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports: [materialComponents]
})
export class AngularMaterialModule { }
