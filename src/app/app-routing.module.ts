import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardLayoutComponent } from './theme/dashboard-layout/dashboard-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { NotLoggedInGuard } from './auth/not-logged-in.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'top',
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }