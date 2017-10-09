import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent {

  constructor(private _ps: ProductosService, private router: Router) { }
  ver_producto(cod: string) {
    console.log(cod);
    this.router.navigate(['/producto', cod]);
  }
}
