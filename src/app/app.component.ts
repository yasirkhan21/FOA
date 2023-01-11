import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { map } from 'rxjs/operators';
import { DataService } from './data.service';
import { ServiceService } from './service.service';
import { AuthService } from './shared/services/auth.service';
import { Carts } from './shared/services/carts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodOrderingSystem';
  @ViewChild('sidenav')
  sidenav!: MatSidenavModule;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  constructor(private service: ServiceService, private dataService: DataService, public authService: AuthService) { }
  cartItem: Carts[]=[];
  user:any;
  ngOnInit(): void {
     this.user = JSON.parse(localStorage.getItem('user')!);
     console.log(this.user)
    this.getCartItem();
  }

  getCartItem(): void {
    this.dataService.getAllCarts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.cartItem = data.filter(x => x.userId == this.dataService.getUserId());
      console.log(this.cartItem)
    });
  } 

}
