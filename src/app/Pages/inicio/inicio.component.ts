import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Cliente {
  cedula: string;
  nombre: string;
  consumo: number;
  deuda: number;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  searchTerm: string = '';
  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerClientes();
  }
  
  obtenerClientes() {
    this.http.get<Cliente[]>('http://localhost:8080/demo.ups/rs/clientes')
      .subscribe(response => {
        console.log('Clientes obtenidos con éxito:', response);
        this.clientes = response;
        this.clientesFiltrados = response;
      }, error => {
        console.error('Error al obtener los clientes:', error);
      });
  }
  
  buscarCedula() {
    if (this.searchTerm.trim() !== '') {
      const clienteEncontrado = this.clientes.filter(cliente => cliente.cedula === this.searchTerm);
      if (clienteEncontrado.length > 0) {
        this.clientesFiltrados = clienteEncontrado;
      } else {
        this.clientesFiltrados = [];
      }
    } else {
      this.clientesFiltrados = this.clientes;
    }
  }
}

