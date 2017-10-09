import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {
  cod: string;
  private sub: any;
  producto: any = {}
  constructor(private route: ActivatedRoute, private _ps: ProductosService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.cod = params['cod']; // (+) converts string 'id' to a number
      this._ps.obtenerDatosProduto(this.cod).subscribe(data => {
        this.producto = data.json();
      })
      // In a real app: dispatch action to load the details here.
    });
  }

}
