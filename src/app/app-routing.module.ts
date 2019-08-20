import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { UserComponent } from './user/user.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { EstateComponent } from './estate/estate.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'new_hote', component: AddEstateComponent},
  {path: 'new_hote/:uuid', component: AddEstateComponent},
  {path: 'help', component: HelpComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'user', component: UserComponent},
  {path: 'listUser', component: GetUsersComponent},
  {path: 'new_estate', component: AddEstateComponent},
  {path: 'estate/:uuid', component: EstateComponent},
  {path: 'activate/:token', component: ActivateUserComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'edit-profil', component: EditProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
