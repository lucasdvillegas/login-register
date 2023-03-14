import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {usuario: 'Abcd', nombre: '4qHydrogen', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'Bcde', nombre: '3wHydrogen', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'Cdef', nombre: '2eHydrogen', apellido: 'Perez', sexo: 'No binario'},
    {usuario: 'Defg', nombre: '1rHydrogen', apellido: 'Perez', sexo: 'Sin definir'}
  ];

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(id: number){
    this.listaUsuarios.splice(id, 1);

  }
}
