import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'
import { APP_ROUTING } from './app.router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';

import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';
import { ProductoComponent } from './components/producto/producto.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductoComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [InformacionService,
    ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
