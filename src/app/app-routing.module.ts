import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/expyedu/edit-experiencia.component';
import { NewExperienciaComponent } from './components/expyedu/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditskillComponent } from './components/hys/editskill.component';
import { NewskillComponent } from './components/hys/newskill.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'nuevaskill', component: NewskillComponent},
  {path:'editskill/:id', component: EditskillComponent},
  {path:'editbanner/:id', component: EditBannerComponent},
  {path:'nuevoproy', component: NewproyectoComponent},
  {path:'editproy/:id', component: EditproyectoComponent},
  {path: 'register', component: RegisterComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
