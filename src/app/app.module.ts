import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AuthTokenInterceptor } from './token.interceptor';

import { FooterComponent } from './ui/footer/footer.component';
import { MenuComponent } from './ui/menu/menu.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './ui/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
