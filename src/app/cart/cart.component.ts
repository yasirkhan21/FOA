import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private service:ServiceService,private toast: ToastrService){}
  cartList!:any[];
  ngOnInit(): void {
  this.getCartItem();
 
  }
removeCartItem(id:number){
  this.service.removeCart(id).subscribe(res=>{
    if(res){
      this.toast.success("Item removed from cart")
      window.location.reload();
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
