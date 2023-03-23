import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  declarations: [],
  imports:  [CommonModule,RouterModule.forRoot(routes, { enableTracing: false })]
})
export class AppRoutingModule {
  
 }
