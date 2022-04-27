import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetalhesOfertaComponent } from './detalhes-oferta/detalhes-oferta.component';
import { InicioOfertasComponent } from './inicio-ofertas/inicio-ofertas.component';

const routes: Routes = [
  {
    path: '', component:InicioOfertasComponent
  },
  {
    path: 'detalhes-oferta', component:DetalhesOfertaComponent
  },
  {
    path: 'checkout', component:CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
