import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ApprovereqComponent } from './components/approvereq/approvereq.component' 

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'account/:id', component: AccountComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'requests/:id', component: RequestsComponent},
  { path: 'userreqs/:id', component: ApprovereqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
