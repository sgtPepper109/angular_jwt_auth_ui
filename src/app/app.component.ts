import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DemoAngularPrimeNG';
  navbar_account_options: MenuItem[] | undefined;

  ngOnInit() {
    this.navbar_account_options = [
      {
        label: 'Login',
        routerLink: '/login'
      },
      {
        label: 'Signup',
        routerLink: '/signup'
      }
    ];
  }
}
