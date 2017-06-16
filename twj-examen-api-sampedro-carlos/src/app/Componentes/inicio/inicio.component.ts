import { Component, Input,  OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {PeliculasInterface} from "../Interfaces/Peliculas";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {



  peliculas: PeliculasInterface[] = [];

  constructor( private _http: Http ) { }

  ngOnInit() {
  }

  cargarPeliculas(){
    this._http
      .get('http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino')
      .subscribe(
        (response) => {
          console.log('Response:', response);

          console.log(response.json());

          const respuesta = response.json();

          console.log(respuesta.next);

          this.peliculas = respuesta;


        },
        (error) => {
          console.log('Error:', error);
        },
        () => {
          console.log('Finally');
        }

      );
  }

}

