import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';

export enum TipoUsuario {
  Administrador = 'ADMIN',
  Cliente = 'CLIENTE'
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  cep: number;
  role: TipoUsuario;

}


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private apiService: ApiService) { }

  public listar(UsuarioFilter = {}): Observable<Usuario[]> {
    return this.apiService.get<Usuario[]>('painel/usuarios');
  }

  public get(usuarioId: number): Observable<Usuario> {
    return this.apiService.get<Usuario>(`painel/usuarios/${usuarioId}`);
  }

  public salvar(usuario: Usuario): Observable<Usuario> {
    return this.apiService.post<Usuario>(`painel/usuarios`, usuario);
  }

  public atualizar(usuarioId: number, usuario: Usuario): Observable<Usuario> {
    return this.apiService.put<Usuario>(`painel/usuarios/${usuarioId}`, usuario)
  }

  public remover(usuarioId: number) {
    return this.apiService.delete(`painel/usuarios/${usuarioId}`);
  }
}
