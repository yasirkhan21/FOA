import { Component,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
constructor(private cs:ServiceService,private fb:FormBuilder){}
open:boolean=false;
list:boolean=false;
productForm!:FormGroup;
product!:any[];
  ngOnInit(): void {
   this.productForm=this.fb.group({
    productName:['',],
    productImg:['',],
    price:['',] 
   })
   this.cs.getProduct().subscribe(list=>{
    this.product=list;
   })
  }
addFood(){
  if(this.productForm.valid)
  {
  this.cs.addProduct(this.productForm.value).subscribe();
  alert("Product Added")
  window.location.reload();
  }
}
}
