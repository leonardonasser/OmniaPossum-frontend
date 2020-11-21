import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Usuario } from '../../usuario/usuario.service';

export interface UsuarioAuth {
  token: string;
  email: string;
  nome: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly currentUserLocalStorageKey = 'currentUser';

  private currentUserSubject: BehaviorSubject<UsuarioAuth | null>;
  public currentUserObs: Observable<UsuarioAuth | null>;

  constructor(private apiService: ApiService) {
    const currentUser = this.getCurrentUserFromLocalStorage();
    this.currentUserSubject = new BehaviorSubject<UsuarioAuth>(currentUser);
    this.currentUserObs = this.currentUserSubject.asObservable();
  }

  public get isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  public get currentUser(): UsuarioAuth | null {
    return this.currentUserSubject.value;
  }

  private getCurrentUserFromLocalStorage(): any {
    const json = localStorage.getItem(this.currentUserLocalStorageKey);
    return json != null ? JSON.parse(json) : null;
  }

  private saveUserToLocalStorage(usuario: object): void {
    localStorage.setItem(this.currentUserLocalStorageKey, JSON.stringify(usuario));
  }

  public login(email: string, senha: string): Observable<UsuarioAuth> {
    const payload = {
      email,
      senha,
    };

    return this.apiService.post('auth/login', payload)
      .pipe(tap((usuario: UsuarioAuth) => {
        this.saveUserToLocalStorage(usuario);
        this.currentUserSubject.next(usuario);
      }));
  }

  public logout(): void {
    localStorage.removeItem(this.currentUserLocalStorageKey);
    this.currentUserSubject.next(null);
  }

  public resetarSenha(cpf: string): Observable<any> {
    const payload = { cpf };
    return this.apiService.post('auth/reset-senha', payload);
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.apiService.post<Usuario>(`painel/usuarios/cadastrar`, usuario);
  }

}
