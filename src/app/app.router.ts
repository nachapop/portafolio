import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
