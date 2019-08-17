import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewHoteComponent } from './new-hote/new-hote.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { UserComponent } from './user/user.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { EstateComponent } from './estate/estate.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'new_hote', component: NewHoteComponent},
  {path: 'help', component: HelpComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'user', component: UserComponent},
  {path: 'listUser', component: GetUsersComponent},
  {path: 'new_estate', component: AddEstateComponent},
  {path: 'estate', component: EstateComponent},
  {path: 'request_password', component: RequestPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
