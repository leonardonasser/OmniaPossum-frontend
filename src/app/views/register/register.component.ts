import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginServiceService } from '../login/service/login-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  usuario = {email: '', senha: '', confirmar: ''};


  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private message: NzMessageService
    ){}


    public register(){
      this.loginService.register(this.usuario)
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
      this.message.create(type, `Email já existente ou Senhas Diferentes!`);
    }

  ngOnInit(): void {
  }
}
