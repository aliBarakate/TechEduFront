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
import { NzResultModule } from 'ng-zorro-antd/result';
import { CrudFiliereComponentComponent } from './crud-filiere-component/crud-filiere-component.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EditorPageComponent } from './editor-page/editor-page.component';
import {EditorModule} from 'primeng/editor';
import { CrudService } from './crud.service';
import { CrudNiveauComponent } from './crud-niveau/crud-niveau.component';
import { CrudMatiereComponent } from './crud-matiere/crud-matiere.component';
import { CrudCycleComponent } from './crud-cycle/crud-cycle.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { CorbeilleMatiereComponent } from './corbeille-matiere/corbeille-matiere.component';
import { KatexModule } from 'ng-katex';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import { CrudPackComponent } from './crud-pack/crud-pack.component';
import { CrudCoursComponent } from './crud-cours/crud-cours.component';
import { CrudChapitresComponent } from './crud-chapitres/crud-chapitres.component';
import { FormPackComponent } from './form-pack/form-pack.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



registerLocaleData(fr);

const appRoutes: Routes = [
  { path: '',component: LandingPageComponent},
  { path: 'login',component: LoginPageComponent},
  { path: 'inscription',component: InscriptionHttpSecondComponent},
  { path: 'ajoutContenu',component: AjoutContenuPageComponent},
  { path: 'confirmationSMS',component: ConfirmationSmsPageComponent},
  { path: 'gestionFiliere',component: CrudFiliereComponentComponent},
  { path: 'pageEditor',component: EditorPageComponent},
  { path: 'gestionNiveaux',component: CrudNiveauComponent},
  { path: 'gestionMatiere',component: CrudMatiereComponent},
  { path: 'gestionCycles',component: CrudCycleComponent},
  { path: 'corbeilleMatiere',component: CorbeilleMatiereComponent},
  { path: 'gestionPack',component: CrudPackComponent},
  { path: 'gestionChapitres',component: CrudChapitresComponent},
  { path: 'gestionCours',component: CrudCoursComponent},
  { path: 'formPack',component: FormPackComponent},
  { path: 'userDashboard',component: UserDashboardComponent},


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
    ConfirmationSmsPageComponent,
    CrudFiliereComponentComponent,
    EditorPageComponent,
    CrudNiveauComponent,
    CrudMatiereComponent,
    CrudCycleComponent,
    CorbeilleMatiereComponent,
    CrudPackComponent,
    CrudCoursComponent,
    CrudChapitresComponent,
    FormPackComponent,
    UserDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    NzResultModule,
    NzTableModule,
    EditorModule,
    DropdownModule,
    InputTextModule,
    KatexModule,
    InputTextareaModule,
    ToastModule,
    InputTextModule,
    MultiSelectModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR },MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
