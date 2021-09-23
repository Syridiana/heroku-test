import { Component, OnInit } from '@angular/core';
import { ImagenesAPIService } from '../../servicios/imagenes-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  random: any;
  pickedMovie:any;
  movieListId = [{ 'id': 694, 'name': 'El Resplandor' },
  { 'id': 550, 'name': 'El Club de la Pelea' },
  { 'id': 493922, 'name': 'Hereditary' },
  { 'id': 530385, 'name': 'Midsommar' },
  { 'id': 603, 'name': 'The Matrix' },
  { 'id': 348, 'name': 'Alien: Octavo Pasajero' },
  { 'id': 149, 'name': 'Akira' },
  { 'id': 128, 'name': 'La Princesa Mononoke' },
  { 'id': 62, 'name': '2001: Odisea del Espacio' },
  { 'id': 103, 'name': 'Taxi Driver' }];

  imageUrl = '';
  // El resplandor 694
  // El club de la pelea 550
  // Hereditary 493922
  // 530385 Midsommar
  // matrix 603
  // 348 alien octavo pasajero
  // 149 akira
  //128 princesa mononoke
  //62 2001 odisea del espacio
  //103 taxi driver

  constructor(private datosApi: ImagenesAPIService) {
    this.pickMovie();
  }

  chequearPelicula(id:any) {
    if(this.pickedMovie.id == id){
      
      Swal.fire({
        icon: 'success',
        title: 'Great !',
        text: 'Good Job',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Too bad !',
        text: 'That\'s wrong',
        showConfirmButton: false,
        timer: 1500
      });
    }
    this.pickMovie();
    
  }

  pickMovie(){
    this.random = Math.floor((Math.random() * (this.movieListId.length - 1)));
    this.datosApi.obtenerDatos((this.movieListId[this.random].id)).subscribe(
      (pelicula: any) => {
        this.pickedMovie = this.movieListId[this.random];
        const random = Math.floor((Math.random() * (pelicula.backdrops.length - 1)));
        this.imageUrl = 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/' + pelicula.backdrops[random].file_path;
      },
      error => { console.log(error) });
  }

  ngOnInit(): void {
  }

}
