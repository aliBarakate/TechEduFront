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
import { HttpClientModule} from '@angular/common/http';
import { AjoutContenuPageComponent } from './ajout-contenu-page/ajout-contenu-page.component';
import { InscriptionHttpSecondComponent } from './inscription-http-second/inscription-http-second.component';
import { ConfirmationSmsPageComponent } from './confirmation-sms-page/confirmation-sms-page.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzResultModule } from 'ng-zorro-antd/result'

registerLocaleData(fr);

const appRoutes: Routes = [
  { path: '',component: LandingPageComponent},
  { path: 'login',component: LoginPageComponent},
  { path: 'inscription',component: InscriptionHttpSecondComponent},
  { path: 'ajoutContenu',component: AjoutContenuPageComponent},
  { path: 'confirmationSMS',component: ConfirmationSmsPageComponent},



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
    RegistrationComponentComponent,
    AjoutContenuPageComponent,
    InscriptionHttpSecondComponent,
    ConfirmationSmsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    NzResultModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
