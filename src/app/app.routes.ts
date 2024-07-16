import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { AcercaDeComponent } from './Pages/acerca-de/acerca-de.component';

export const routes: Routes = [
    {path: 'inicio', component:  InicioComponent},
    {path: 'acerca-de', component: AcercaDeComponent}
];
