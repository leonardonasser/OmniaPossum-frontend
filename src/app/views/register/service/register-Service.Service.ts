import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class RegisterServiceService {

 constructor(private http: HttpClient) {}

  register(payload: any){
    return this.http.post('http://localhost:8080/usuarios/addUser', payload);
  }
}