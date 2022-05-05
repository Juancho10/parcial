import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Notas } from '../modelo/notas';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  url:String="https://localhost:44395/api/"
  constructor(private http:HttpClient) { }

  GetAllCalificaciones(){
    return this.http.get(this.url+"notas1");
  }
}
