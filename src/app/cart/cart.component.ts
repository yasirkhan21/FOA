import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';
import { Carts } from '../shared/services/carts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private service: ServiceService, private toast: ToastrService, private dataService : DataService) { }
  cartList!: any;
  ngOnInit(): void {
    this.getCartItem();

  }
  // removeCartItem(id: number) {
  //   this.service.removeCart(id).subscribe(res => {
  //     if (res) {
  //       this.toast.success("Item removed from cart")
  //       window.location.reload();
  //       this.getCartItem();
  //     }
  //   });
  // }
  // getCartItem() {
  //   this.service.getCartItem().subscribe(list => {
  //     this.cartList = list;
  //   })
  // }

  getCartItem(): void {
    this.dataService.getAllCarts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.cartList = data;
      console.log(data)
    });
  }

  removeCartItem(key: string): void {
    console.log(key);
    if (key) {
      this.dataService.deleteCarts(key.toString())
        .then(() => {
          console.log('Created new item successfully!');
        })
        .catch(err => console.log(err));
    }
  }

}
