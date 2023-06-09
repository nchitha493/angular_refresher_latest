import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.gaurd';
import { HeaderComponent } from './home/header/header.component';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () =>
      import(`./auth/auth.module`).then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'home',
    component: HeaderComponent,
    loadChildren: () =>
      import(`./home/home.module`).then(
        (m) => m.HomeModule
      ),
      canActivate: [AuthGuard]
      
  }
];
//Here are some types of Angular guards: CanActivate, CanActivateChild, CanLoad, CanDeactivate and Resolve

@NgModule({
  declarations: [],
  imports:  [CommonModule,RouterModule.forRoot(routes, { enableTracing: false })]
})
export class AppRoutingModule {
  
 }
