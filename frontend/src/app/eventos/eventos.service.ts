import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private apiUrl = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}

  obtenerEventos(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }

  crearEvento(evento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, evento);
  }

  eliminarEvento(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id)
  }
}

