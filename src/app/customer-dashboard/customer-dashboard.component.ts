import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})

  export class CustomerDashboardComponent {
    @ViewChild('sidenav')
    sidenav!: MatSidenavModule;
    isExpanded = false;
    showSubmenu: boolean = false;
    isShowing = false;
    showSubSubMenu: boolean = false;
  
    
      constructor(private cs:ServiceService,private fb:FormBuilder){}
      open:boolean=false;
      list:boolean=false;
      productForm!:FormGroup;
      product!:any[];
      resturants!:any[];
     
      
      
        ngOnInit(): void {
         this.productForm=this.fb.group({
          productName:['',],
          productImg:['',],
          price:['',] 
         })
         this.cs.getProduct().subscribe(list=>{
          this.product=list;
         })
         this.cs.getResturants().subscribe(res=>{
       
          this.resturants=res;})
        }
      // addFood(){
      //   if(this.productForm.valid)
      //   {
      //   this.cs.addProduct(this.productForm.value).subscribe();
      //   alert("Product Added")
      //   window.location.reload();
      //   }
      // }
      mouseenter() {
        if (!this.isExpanded) {
          this.isShowing = true;
        }
      }
    
      mouseleave() {
        if (!this.isExpanded) {
          this.isShowing = false;
        }
      }

    }
      
    
  
  
  


