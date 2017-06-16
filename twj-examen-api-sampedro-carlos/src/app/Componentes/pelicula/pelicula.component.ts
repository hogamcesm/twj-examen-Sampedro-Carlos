import { Component, Input,  OnInit } from '@angular/core';
import {PeliculasInterface} from "../Interfaces/Peliculas";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: PeliculasInterface
  constructor() { }

  ngOnInit() {
  }

}
