import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private route: Router) { }
  hide: boolean = false;
  adminLogin() {
    this.route.navigate(['/customer-dashboard']);
  }
}
