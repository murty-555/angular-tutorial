import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PbindingComponent } from './components/pbinding/pbinding.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { SBindingComponent } from './components/s-binding/s-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { TwBindingComponent } from './components/tw-binding/tw-binding.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { ParentComponent } from './components/compCom/parent/parent.component';
import { ChildComponent } from './components/compCom/child/child.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MobileNameComponent } from './components/mobile-name/mobile-name.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { TemRefVariableComponent } from './components/tem-ref-variable/tem-ref-variable.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { MobilesService } from './services/mobiles.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    PbindingComponent,
    CBindingComponent,
    SBindingComponent,
    EBindingComponent,
    TwBindingComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
    MobileNameComponent,
    MobileDetailsComponent,
    TemRefVariableComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MobilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
