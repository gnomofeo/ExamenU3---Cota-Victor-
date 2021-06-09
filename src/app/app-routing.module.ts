import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirComponent } from './components/anadir/anadir.component';
import { ListacontactosComponent } from './components/listacontactos/listacontactos.component';

const routes: Routes = [
  {path:'Listacontactos',component:ListacontactosComponent},
  {path:'Anadirr',component:AnadirComponent},
  {path: '**',pathMatch:'full',redirectTo: 'Anadirr'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
