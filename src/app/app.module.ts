import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes,RouterModule,Route} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { SubmitprojectComponent } from './components/submitproject/submitproject.component';
import { FourOFourErrorComponent } from './components/four-o-four-error/four-o-four-error.component';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'submit project', component:SubmitprojectComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'404',component:FourOFourErrorComponent},
  {path:'**',redirectTo:'404'}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    LoginComponent,
    SubmitprojectComponent,
    FourOFourErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
