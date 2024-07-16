import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  searchTerm: string = '';
  showResults: boolean = false;
  
  cliente: { cedula: string; consumo: string; deuda: string } = {
    cedula: '',
    consumo: '',
    deuda: ''
  };
  clientes: { cedula: string; consumo: string; deuda: string }[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerClientes();
  }
  

  obtenerClientes() {
    this.http.get<{ cedula: string; consumo: string; deuda: string }[]>('http://localhost:8080/demo.ups/rs/clientes')
      .subscribe(response => {
        console.log('Clientes obtenidos con éxito:', response);
        this.clientes = response;
      }, error => {
        console.error('Error al obtener los clientes:', error);
      });
  }

}

