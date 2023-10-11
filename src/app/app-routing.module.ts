import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfComponent } from './components/if/if.component';
import { ForComponent } from './components/for/for.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParentComponent } from './components/compCom/parent/parent.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { PbindingComponent } from './components/pbinding/pbinding.component';
import { SBindingComponent } from './components/s-binding/s-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { SwitchComponent } from './components/switch/switch.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { TwBindingComponent } from './components/tw-binding/tw-binding.component';
import { MobileNameComponent } from './components/mobile-name/mobile-name.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { TemRefVariableComponent } from './components/tem-ref-variable/tem-ref-variable.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { MobileInDetailComponent } from './components/mobile-in-detail/mobile-in-detail.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { adminAccessGuard } from './admin-access.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [adminAccessGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'class-binding',
    component: CBindingComponent
  },
  {
    path: 'property-binding',
    component: PbindingComponent
  },
  {
    path: 'style-binding',
    component: SBindingComponent
  },
  {
    path: 'event-binding',
    component: EBindingComponent
  },
  {
    path: 'twd-binding',
    component: TwBindingComponent
  },
  {
    path: 'if',
    component: IfComponent
  },
  {
    path: 'for',
    component: ForComponent
  },
  {
    path: 'switch',
    component: SwitchComponent
  },
  {
    path: 'compCom',
    component: ParentComponent
  },
  {
    path: 'mobiles',
    component: MobileNameComponent
  },
  {
    path: 'mobiles/:id',
    component: MobileDetailsComponent,
    children: [
      {
        path: 'full-details',
        component: MobileInDetailComponent
      }
    ]
  },
  {
    path: 'tempRefVar',
    component: TemRefVariableComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  { path: 'lazyLoading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
