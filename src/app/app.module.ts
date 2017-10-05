import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'
import { APP_ROUTING } from './app.router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';

import { InformacionService } from './services/informacion.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PorfolioComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
