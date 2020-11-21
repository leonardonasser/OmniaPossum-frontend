import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isFormInvalid } from 'src/app/shared/utils/form-utils';
import { ApiError } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import {TipoUsuario, UsuarioService} from "../../usuario/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  resetSenhaForm: FormGroup;
  criarUsuarioForm: FormGroup

  mostrarResetSenha = false;
  mostrarCriarUsuario = false;
  loading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
              private message: NzMessageService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]],
    });

    this.resetSenhaForm = this.fb.group({
      email: [null, [Validators.required]],
    });

    this.criarUsuarioForm = this.fb.group({
      //id: [null],
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      cep: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      senhaConfirma: [null, [Validators.required]]
    });

  }

  submitLoginForm(): void {
    if (isFormInvalid(this.loginForm)) {
      return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.senha)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/']);
          this.loading = false;
        },
        (error: ApiError) => {
          this.message.error(error.message);
          this.loading = false;
        }
      );
  }

  submitResetSenhaForm(): void {
    if (isFormInvalid(this.resetSenhaForm)) {
      return;
    }

    this.loading = true;
    this.authService.resetarSenha(this.resetSenhaForm.value.cpfCnpj)
    .subscribe(
      () => {
        this.message.success('Email enviado com sucesso');
        this.loading = false;
      },
      (error: ApiError) => {
        this.message.error(error.message);
        this.loading = false;
      }
    );
  }

  validSenha(senha: string, senhaConfirma: string) {
    return senha == senhaConfirma;
  }

  submitCriarUsuarioForm(): void {

    
    if (isFormInvalid(this.criarUsuarioForm)) {
      return;
    }

    if (!this.validSenha(this.criarUsuarioForm.value.senha, this.criarUsuarioForm.value.senhaConfirma)) {
      this.message.error('As senhas não coincidem! Tente novamente.')
      return;
    }

    this.loading = true;
    this.authService.cadastrarUsuario(this.criarUsuarioForm.value)
        .subscribe(
            () => {
              this.loading = false;
              this.message.success('Usuário cadastrado com sucesso');
              this.mostrarCriarUsuario = false;
            },
            (e) => {
              this.loading = false;
              this.message.error(e.message);
            }
        );
  
  }

}
