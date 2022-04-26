import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioOfertasComponent } from './inicio-ofertas/inicio-ofertas.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
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
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { DetalhesOfertaComponent } from './detalhes-oferta/detalhes-oferta.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioOfertasComponent,
    DetalhesOfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    DividerModule,
    ImageModule,
    ToolbarModule,
    CardModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
