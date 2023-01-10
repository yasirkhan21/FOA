import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import { DataService } from '../data.service';
import { Products } from '../shared/services/products';
import { Carts } from '../shared/services/carts';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private cs: ServiceService, private toast: ToastrService, private dataService: DataService) { }
  product!: Products[];
  cartItem!: Carts;
  ngOnInit(): void {
    // this.cs.getProduct().subscribe(list => {
    //   this.product = list;
    // });

    this.retrieveProducts();
  }
  // addtoCart(cartItem: Carts) {
  //   console.log(cartItem)
  //   this.cs.addToCart(cartItem).subscribe(res => {
  //     this.toast.success("Item added into cart")
  //     window.location.reload();
  //   });
  // }

  addtoCart(pro: Products): void {
    // this.cartItem.userId = this.dataService.getUserId();
    const car: Carts = {
      price: pro.price,
      productImage: pro.productImage,
      productName: pro.productName,
      userId: this.dataService.getUserId()
    }
    if (true) {
      this.dataService.createCarts(car).then(() => {
        console.log('Created new item successfully!');
      });
    }
  }

  retrieveProducts(): void {
    this.dataService.getAllProducts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.product = data;
      // console.log(data);
    });
  }
}
