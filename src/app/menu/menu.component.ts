import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  constructor(private cs:ServiceService,private toast: ToastrService){}
  product!:any[];
  ngOnInit(): void {
    this.cs.getProduct().subscribe(list=>{
      this.product=list;
     })
  }
  addtoCart(cartItem:any){
  console.log(cartItem)
  this.cs.addToCart(cartItem).subscribe(res=>{
    this.toast.success("Item added into cart")
    window.location.reload();
  });
  }


  
}
