import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './ui/menu/menu.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home/home.component';
import { EstateComponent } from './ui/estate/estate.component';
import { EstateFormComponent } from './ui/estate-form/estate-form.component';
import { AdminLoginComponent } from './auth/components/admin-login/admin-login.component';
import { CrmComponent } from './ui/admin/crm/crm.component';
import { AvisComponent } from './ui/admin/avis/avis.component';
import { CategoryComponent } from './ui/admin/category/category.component';
import { AnnoncesComponent } from './ui/admin/annonces/annonces.component';
import { HostComponent } from './ui/host/host.component';
import { ProfilComponent } from './ui/profil/profil.component';
import { ContactComponent } from './ui/contact/contact.component';
import { FaqComponent } from './ui/faq/faq.component';
import { ConditionsPrivacyComponent } from './ui/conditions-privacy/conditions-privacy.component';
import { FourOhFourComponent } from './ui/four-oh-four/four-oh-four.component';
import { MessengerComponent } from './ui/messenger/messenger.component';
import { ListReservationComponent } from './ui/list-reservation/list-reservation.component';
import { NotificationComponent } from './ui/notification/notification.component';
import { ClearEstateFormComponent } from './ui/admin/clear-estate-form/clear-estate-form.component';
import { AnnonceComponent } from './ui/annonce/annonce.component';
import { ConnectedGuard } from './auth/guard/connected.guard';
import { PaypalComponent } from './ui/paypal/paypal.component';
import { SearchComponent } from './ui/search/search.component';
import { ActivateUserComponent } from './auth/components/activate-user/activate-user.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'activation/:token', component: ActivateUserComponent},
  { path: 'search', component: SearchComponent},
  { path: 'estate/:uuid', component: EstateComponent},
  { path: 'estate_form', canActivate:[ConnectedGuard],  component: EstateFormComponent},
  { path: 'admin', component: AdminLoginComponent},
  { path: 'crm', canActivate:[ConnectedGuard], component: CrmComponent},
  { path: 'avis', canActivate:[ConnectedGuard], component: AvisComponent},
  { path: 'categories', canActivate:[ConnectedGuard],component: CategoryComponent},
  { path: 'admin-annonces',canActivate:[ConnectedGuard], component: AnnoncesComponent},
  { path: 'host', component: HostComponent},
  { path: 'profil', canActivate:[ConnectedGuard], component: ProfilComponent},
  { path: 'reservations', canActivate:[ConnectedGuard],component: ListReservationComponent},
  { path: 'messenger',canActivate:[ConnectedGuard], component: MessengerComponent},
  { path: 'notification', canActivate:[ConnectedGuard],component: NotificationComponent},
  { path: 'annonces', canActivate:[ConnectedGuard], component: AnnonceComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'clearEstateForm', canActivate:[ConnectedGuard], component : ClearEstateFormComponent },
  { path: 'conditions-privacy', component: ConditionsPrivacyComponent},
  { path: 'payment/:uuid', component: PaypalComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },


  // { path: 'sitemap', component: sitemap},
  // { path: 'rules', component: rules},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
