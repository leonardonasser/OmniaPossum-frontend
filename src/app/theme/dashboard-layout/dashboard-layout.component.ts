import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  isCollapsed = false;

  menus = [
    { name: 'Home', link: '/', icon: 'home' },
    { name: 'Eventos', link: '/motoristas', icon: 'user' },
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  get motorista() {
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    //location.reload();
  }

}
