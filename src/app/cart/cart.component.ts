import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private service:ServiceService){}
  cartList!:any[];
  ngOnInit(): void {
  this.getCartItem();
  }
removeCartItem(id:number){
  this.service.removeCart(id).subscribe(res=>{
    if(res){
      this.getCartItem();
    }
  });
}
getCartItem(){
  this.service.getCartItem().subscribe(list=>{
    this.cartList=list;
   })
}
}
