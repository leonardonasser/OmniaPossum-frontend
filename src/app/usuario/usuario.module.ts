import { NgModule } from '@angular/core';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioPageComponent } from './usuario-page.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { UsuarioNovoPageComponent } from './usuario-novo-page.component';
import { UsuarioEditarPageComponent } from './usuario-editar-page.component';
import { UsuarioFormComponent } from './usuario-form.component';


@NgModule({
  declarations: [
    UsuarioPageComponent,
    UsuarioNovoPageComponent,
    UsuarioEditarPageComponent,
    UsuarioFormComponent
  ],
  imports: [
    SharedModule,
    ThemeModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
