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
  cartItem!: Carts[];
  ngOnInit(): void {
    // this.service.getCartItem().subscribe(list => {
    //   this.cartItem = list;
    // })
    this.getCartItem();
  }
  // ngDoCheck(){
  //   this.service.getCartItem().subscribe(list=>{
  //     this.cartItem=list;
  //     console.log(2);
  //    })
  //    console.log(1);
  // }

  getCartItem(): void {
    this.dataService.getAllCarts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.cartItem = data;
      // console.log(this.cartItem)
    });
  }

}
