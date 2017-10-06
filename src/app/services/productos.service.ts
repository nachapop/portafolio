import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ProductosService {
  productos: any[] = [];
  loading: boolean = true;
  constructor(private http: Http) {
    this.http.get("https://api-project-101954137644.firebaseio.com/productos_idx.json")
      .subscribe(data => {
        this.productos = data.json()
        this.loading = false
      });
  }

}
