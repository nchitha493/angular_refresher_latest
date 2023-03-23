import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.gaurd';

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
    loadChildren: () =>
      import(`./home/home.module`).then(
        (m) => m.HomeModule
      ),
      canActivate: [AuthGuard]
      
  }
];

@NgModule({
  declarations: [],
  imports:  [CommonModule,RouterModule.forRoot(routes, { enableTracing: false })]
})
export class AppRoutingModule {
  
 }
