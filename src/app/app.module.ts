import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

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
    EstateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

  ],

  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true}

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
