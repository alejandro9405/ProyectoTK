import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { ContactoComponent} from './components/contacto/contacto.component';

//services
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'contacto', component: ContactoComponent },


  //services
  {path:"alumno", component:AlumnoComponent},
  {path:"add", component:AddComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"show/:id", component:ShowComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
