import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatIconModule, MatCardModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { FilterPipe} from './filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { EstateComponent } from './estate/estate.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FileUploadModule} from 'ng2-file-upload';
import { AddEstateComponent } from './add-estate/add-estate.component';
import { UserComponent } from './user/user.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { ProfilComponent } from './profil/profil.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HelpComponent,
    HomeComponent,
    BookingComponent,
    EstateComponent,
    UploadFileComponent,
    AddEstateComponent,
    UserComponent,
    GetUsersComponent,
    RequestPasswordComponent,
    ActivateUserComponent,
    ProfilComponent,
    EditProfilComponent,


  ],
  imports: [
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    FileUploadModule,
    MatSelectModule,
    ReactiveFormsModule
  ],

  providers: [
    ApiService,
    AuthService,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
