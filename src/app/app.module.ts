import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MatInputModule, MatIconModule, MatCardModule} from '@angular/material';

import { AuthTokenInterceptor } from './token.interceptor';
import { EstateFormComponent } from './ui/estate-form/estate-form.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MenuComponent } from './ui/menu/menu.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { HomeComponent } from './ui/home/home.component';
import { AboutComponent } from './ui/about/about.component';
import { MonthSliderComponent } from './ui/month-slider/month-slider.component';
import { EstateComponent } from './ui/estate/estate.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { LineSliderComponent } from './ui/line-slider/line-slider.component';
import { AdminLoginComponent } from './auth/components/admin-login/admin-login.component';
import { CrmComponent } from './ui/admin/crm/crm.component';
import { AvisComponent } from './ui/admin/avis/avis.component';
import { CategoryComponent } from './ui/admin/category/category.component';
import { AdminNavComponent } from './ui/admin/admin-nav/admin-nav.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AnnoncesComponent } from './ui/admin/annonces/annonces.component';
import { HostComponent } from './ui/host/host.component';
import { ProfilComponent } from './ui/profil/profil.component';
import { ModalComponent } from './ui/modal/modal.component';
import { ContactComponent } from './ui/contact/contact.component';
import { FaqComponent } from './ui/faq/faq.component';
import { ConditionsPrivacyComponent } from './ui/conditions-privacy/conditions-privacy.component';
import { FourOhFourComponent } from './ui/four-oh-four/four-oh-four.component';
import { MessengerComponent } from './ui/messenger/messenger.component';
import { ReservationComponent } from './ui/reservation/reservation.component';
import { ListReservationComponent } from './ui/list-reservation/list-reservation.component';
import { NotificationComponent } from './ui/notification/notification.component';
import { ClearEstateFormComponent } from './ui/admin/clear-estate-form/clear-estate-form.component';
import { UserAnnoncesComponent } from './ui/user-annonces/user-annonces.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
    MonthSliderComponent,
    EstateComponent,
    LineSliderComponent,
    EstateFormComponent,
    AdminLoginComponent,
    CrmComponent,
    AvisComponent,
    CategoryComponent,
    AdminNavComponent,
    AnnoncesComponent,
    HostComponent,
    ProfilComponent,
    ModalComponent,
    ContactComponent,
    FaqComponent,
    ConditionsPrivacyComponent,
    FourOhFourComponent,
    MessengerComponent,
    ReservationComponent,
    ListReservationComponent,
    NotificationComponent,
    ClearEstateFormComponent,
    UserAnnoncesComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatIconModule,


  ],

  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor, multi: true,
  }


    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
