import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {LoginServiceService} from './service/login-service.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;
  usuario = {email: '', senha: ''};

  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private message: NzMessageService
    ){}

  public login(){
    this.loginService.login(this.usuario)
    .subscribe(
      (data) =>
       {
        this.router.navigate(['home']);
      },
      (e) => {
      this.createMessage('error');
      console.log("deu errado");
      }
    )
  }

  createMessage(type: string): void {
    this.message.create(type, `Usuario ou Senha Invalidos!`);
  }

  ngOnInit(): void {
  }

}
