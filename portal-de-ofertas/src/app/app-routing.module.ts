import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioOfertasComponent } from './inicio-ofertas/inicio-ofertas.component';

const routes: Routes = [
  {
    path: 'inicio-ofertas', component:InicioOfertasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
