import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(public _is: InformacionService) { }

  ngOnInit() {
  }

}
