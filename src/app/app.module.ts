import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExpyeduComponent } from './components/expyedu/expyedu.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/expyedu/new-experiencia.component';
import { EditExperienciaComponent } from './components/expyedu/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditskillComponent } from './components/hys/editskill.component';
import { NewskillComponent } from './components/hys/newskill.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    ExpyeduComponent,
    HysComponent,
    ProyectosComponent,
    NewproyectoComponent,
    HomeComponent,
    LoginComponent,
    ExpyeduComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditskillComponent,
    NewskillComponent,
    EditBannerComponent,
    EditproyectoComponent,
    ContactoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
