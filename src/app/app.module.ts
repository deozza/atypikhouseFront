import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewHoteComponent } from './new-hote/new-hote.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { FilterPipe} from './filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { EstateComponent } from './estate/estate.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NewHoteComponent,
    HelpComponent,
    HomeComponent,
    BookingComponent,
    EstateComponent,

  ],
  imports: [
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
  ],

  providers: [
    ApiService,
    AuthService,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
