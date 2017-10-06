import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class InformacionService {
  info: any = {};
  equipo: any[] = []
  constructor(public http: Http) {
    this.getDataPage();
    this.getTeamData();
  }
  private getDataPage(): void {
    this.http.get("assets/data/info.pagina.json")
      .subscribe(data => this.info = data.json())
  }
  private getTeamData(): void {
    this.http.get("https://api-project-101954137644.firebaseio.com/equipo.json")
      .subscribe(data => { this.equipo = data.json(); console.log(this.equipo) })
  }
}
