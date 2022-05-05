
import { Component, OnInit } from '@angular/core';
import { CalificacionesService } from 'src/app/services/calificaciones.service';

@Component({
  selector: 'app-parcial',
  templateUrl: './parcial.component.html',
  styleUrls: ['./parcial.component.css']
})
export class ParcialComponent implements OnInit {
  notas = this.api.GetAllCalificaciones();
  lista:any =[];

  constructor(public api: CalificacionesService) { }
  ngOnInit(): void {
  }
  GetAllNotas(){
    this.api.GetAllCalificaciones().subscribe(response =>{
      this.lista = response;
      console.log(response);

    })
  }
}
