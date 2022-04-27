import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioOfertasComponent } from './inicio-ofertas/inicio-ofertas.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {DividerModule} from 'primeng/divider';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { DetalhesOfertaComponent } from './detalhes-oferta/detalhes-oferta.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';


@NgModule({
  declarations: [
    AppComponent,
    InicioOfertasComponent,
    DetalhesOfertaComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    ImageModule,
    ToolbarModule,
    CardModule,
    GalleriaModule,
    CreditCardDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
