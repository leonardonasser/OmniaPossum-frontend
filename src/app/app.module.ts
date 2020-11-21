
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ThemeModule } from './theme/theme.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import {IConfig, NgxMaskModule} from 'ngx-mask';
import {NzSpaceModule} from "ng-zorro-antd/space";


import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ThemeModule,
    SharedModule,
    AuthModule,
    NgxMaskModule.forRoot(),
    NzSpaceModule,
    NzIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
