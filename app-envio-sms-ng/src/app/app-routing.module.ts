import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnviarSmsComponent} from './enviar-sms/enviar-sms.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'enviarSms', component: EnviarSmsComponent },
  {path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
