import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {loginConstants} from '../login-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {}

  login(payload: any){
  return this.http.post('http://localhost:8080/auth/login', payload);
   }

  register(payload: any){
  return this.http.post('http://localhost:8080/usuarios/addUser', payload);
  }
       

}
