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

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'estate/:uuid', component: EstateComponent},
  { path: 'estate_form', component: EstateFormComponent},
  { path: 'admin', component: AdminLoginComponent},
  { path: 'crm', component: CrmComponent},
  { path: 'avis', component: AvisComponent},
  { path: 'categories', component: CategoryComponent},
  { path: 'crm-annonces', component: AnnoncesComponent},
  { path: 'host', component: HostComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'reservations', component: ListReservationComponent},
  { path: 'messenger', component: MessengerComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'clearEstateForm', component : ClearEstateFormComponent },
  { path: 'conditions-privacy', component: ConditionsPrivacyComponent},
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
