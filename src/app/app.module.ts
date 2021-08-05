import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SimpleLoginFormComponent } from './simple-login-form/simple-login-form.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { Routes,RouterModule } from "@angular/router";
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

const appRoutes: Routes = [
  { path: '',component: LandingPageComponent},
  { path: 'login',component: LoginPageComponent},
  { path: 'inscription',component: InscriptionPageComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    MainNavbarComponent,
    SimpleLoginFormComponent,
    InscriptionPageComponent,
    FooterComponentComponent,
    RegistrationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
