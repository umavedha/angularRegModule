import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotEmailComponent,
    ForgotPasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
