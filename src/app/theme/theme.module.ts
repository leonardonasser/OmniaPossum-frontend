// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NG-ZORRO
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

// App
import { tips } from './validation-tips';
import { SharedModule } from '../shared/shared.module';
import { IconsProviderModule } from './icons-provider.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { PageHeaderComponent } from './page-header/page-header.component';

const publicComponents = [
  DashboardLayoutComponent,
  PageHeaderComponent,
];

const publicModules = [
  IconsProviderModule,
  NzLayoutModule,
  NzMenuModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzCheckboxModule,
  NzCardModule,
  NzAlertModule,
  NzMessageModule,
  NzAvatarModule,
  NzToolTipModule,
  NzDropDownModule,
  NzTableModule,
  NzDividerModule,
  NzTagModule,
  NzModalModule,
  NzRadioModule,
  NzSelectModule,
  NzDatePickerModule
];

const ngZorroConfig: NzConfig = {
  form: {
    nzAutoTips: tips,
  }
};


@NgModule({
  declarations: [
    ...publicComponents,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ...publicModules
  ],
  exports: [
    ...publicModules,
    ...publicComponents,
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
  ],
})
export class ThemeModule { }
