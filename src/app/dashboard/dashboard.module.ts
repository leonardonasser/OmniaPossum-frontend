import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';



@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    SharedModule,
    ThemeModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
