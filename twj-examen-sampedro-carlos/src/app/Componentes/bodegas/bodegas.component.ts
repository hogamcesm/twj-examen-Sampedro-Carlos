import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {BodegasClass} from "../../Classes/BodegasClass";

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {

  nuevaBodega: BodegasClass = new BodegasClass();
  bodegas: BodegasClass[]= [];

  constructor( private _http: Http) { }

  ngOnInit() {

    console.log( 'Nueva Bodega', this.nuevaBodega );

    this._http.get('http://localhost:1337/Bodega')
      .subscribe(
        respuesta => {
          const rjson: BodegasClass[] = respuesta.json();
          this.bodegas = rjson;
          console.log('Usuarios', this.bodegas);
        },
        error => {
          console.log('Error', error);
        }
      );


  }

  crearBodega(){

    console.log("Entro a crear bodega");
    this._http.post('http://localhost:1337/Bodega/', this.nuevaBodega)
      .subscribe(
        respuesta => {

          let bodegaAgregada;
          bodegaAgregada = respuesta.json();

          this.bodegas.push(bodegaAgregada);
          this.nuevaBodega = {};


        },
        error => {
          console.log('Error', error);
        }
      );
  }

}
