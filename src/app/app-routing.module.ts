import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'getemail',
    component: ForgotEmailComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
