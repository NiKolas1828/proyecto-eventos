import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosService } from './eventos.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos implements OnInit {

  eventos: any[] = [];

  nuevoEvento = {
    nombre: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_fin: ''
  };

  constructor(
    private eventosService: EventosService,
    private snackBar: MatSnackBar
  ) {}

  cargarEventos() {
    this.eventosService.obtenerEventos()
      .subscribe(data => {
        this.eventos = data;
        console.log(data);
      });
  }

  trackById(index: number, evento: any): number {
    return evento.id;
  }

  eventos$!: Observable<any[]>;

  ngOnInit(): void {
    this.eventos$ = this.eventosService.obtenerEventos();
  }
  
  crearEvento() {
    this.eventosService.crearEvento(this.nuevoEvento)
      .subscribe({
        next: () => {
  
          this.snackBar.open('Evento creado con éxito 🎉', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
  
          this.nuevoEvento = {
            nombre: '',
            descripcion: '',
            fecha_inicio: '',
            fecha_fin: ''
          };

          this.cargarEventos();
        },
        error: () => {
          this.snackBar.open('Error al crear el evento ❌', 'Cerrar', {
            duration: 3000
          });
        }
      });
  }

  eliminarEvento(id: number) {
    if(confirm('Seguro que quieres eliminar este evento?')){
      this.eventosService.eliminarEvento(id).subscribe(() => {
        this.cargarEventos();
      })
    }
  }
}