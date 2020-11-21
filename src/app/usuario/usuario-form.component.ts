import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {NzMessageService} from "ng-zorro-antd/message";
import {isFormInvalid} from "../shared/utils/form-utils";
import {TipoUsuario, Usuario, UsuarioService} from "./usuario.service";

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: []
})
export class UsuarioFormComponent implements OnInit {

  @Input() usuario: Usuario | null = null;

  form: FormGroup;

  loading = false;

  constructor(
      private usuarioService: UsuarioService,
      private fb: FormBuilder,
      private router: Router,
      private location: Location,
      private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [this.usuario?.nome, [Validators.required]],
      email: [this.usuario?.email, [Validators.required, Validators.email]],
      role: [this.usuario?.role || TipoUsuario.Cliente, [Validators.required]],
      senha: [this.usuario?.senha, [Validators.required]],
      senhaConfirma: [this.usuario?.senha, [Validators.required]]
    });
  }

  get isNovo() {
    return this.usuario == null;
  }

  voltar() {
    this.location.back();
  }

  get mensagemSucesso() {
    return this.isNovo ? 'Usuário criado com sucesso' : 'Usuário atualizado com sucesso';
  }

  validSenha(senha: string, senhaConfirma: string) {
    return senha == senhaConfirma;
  }

  submit() {
    if (isFormInvalid(this.form)) {
      return;
    }

    if (!this.validSenha(this.form.value.senha, this.form.value.senhaConfirma)) {
      this.message.error('As senhas não coincidem! Tente novamente.')
      return;
    }

    this.loading = true;

    if(this.usuario == null || this.usuario.id == null) {
      this.salvar()
    } else {
      this.atualizar()
    }

  }

  salvar() {
    this.usuarioService.salvar(this.form.value)
        .subscribe(
            () => {
              this.loading = false;
              this.message.success(this.mensagemSucesso);
              this.router.navigate(['usuarios']);
            },
            (e) => {
              this.loading = false;
              this.message.error(e.message);
            }
        );
  }

  atualizar() {
    if (this.usuario) {
      this.usuarioService.atualizar(this.usuario.id, this.form.value)
          .subscribe(
              () => {
                this.loading = false;
                this.message.success(this.mensagemSucesso);
                this.router.navigate(['usuarios']);
              },
              (e) => {
                this.loading = false;
                this.message.success(e.message);
              }
          );
    }
  }

}
