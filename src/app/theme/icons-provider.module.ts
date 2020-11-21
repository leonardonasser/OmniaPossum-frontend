import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  UserOutline,
  LockOutline,
  LogoutOutline,
  PlusOutline,
  EditOutline,
  DeleteOutline,
  ArrowRightOutline,
  SettingOutline,
  WalletOutline,
  FileTextOutline,
  CheckCircleOutline,
  PhoneOutline,
  ExclamationCircleOutline,
  CloseCircleOutline,
  CopyrightCircleOutline,
  EyeOutline,
  MinusOutline,
  CarOutline,
  ToolOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  UserOutline,
  LockOutline,
  LogoutOutline,
  PlusOutline,
  EditOutline,
  DeleteOutline,
  ArrowRightOutline,
  SettingOutline,
  WalletOutline,
  FileTextOutline,
  CheckCircleOutline,
  PhoneOutline,
  ExclamationCircleOutline,
  CloseCircleOutline,
  CopyrightCircleOutline,
  EyeOutline,
  MinusOutline,
  CarOutline,
  ToolOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
