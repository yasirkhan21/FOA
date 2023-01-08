import { Component, ViewChild,OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ServiceService } from './service.service';

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
constructor(private service:ServiceService){}
cartItem!:any[];
  ngOnInit(): void {
   this.service.getCartItem().subscribe(list=>{
    this.cartItem=list;
   })
  }
  // ngDoCheck(){
  //   this.service.getCartItem().subscribe(list=>{
  //     this.cartItem=list;
  //    })
  // }

}
