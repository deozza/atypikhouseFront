import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './ui/menu/menu.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home/home.component';
import { EstateComponent } from './ui/estate/estate.component';
import { EstateFormComponent } from './ui/estate-form/estate-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'estate/:uuid', component: EstateComponent},
  { path: 'estate_form', component: EstateFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
