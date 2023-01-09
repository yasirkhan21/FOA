import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  constructor(private cs:ServiceService){}
  product!:any[];
  ngOnInit(): void {
    this.cs.getProduct().subscribe(list=>{
      this.product=list;
     })
  }
  addtoCart(cartItem:any){
  console.log(cartItem)
  this.cs.addToCart(cartItem).subscribe();
  }


  
}
