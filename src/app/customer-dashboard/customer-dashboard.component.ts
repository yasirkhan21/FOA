import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ServiceService } from '../service.service';
import { Products } from '../shared/services/products';
import { Restaurants } from '../shared/services/restaurants';
import { DataService } from '../../app/data.service';
import { map } from 'rxjs/operators';
import { AuthService } from "src/app/shared/services/auth.service";


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


  constructor(private cs: ServiceService, private fb: FormBuilder, private dataService: DataService,public authService: AuthService) { }
  open: boolean = false;
  list: boolean = false;
  productForm!: FormGroup;
  product!: Products[];
  resturant!: Restaurants[];



  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['',],
      productImg: ['',],
      price: ['',]
    })
    //  this.cs.getProduct().subscribe(list=>{
    //   this.product=list;
    //  })
    //  this.cs.getResturants().subscribe(res=>{

    //   this.resturants=res;})
    this.retrieveProducts();
    this.retrieveRestaurants();

    this.dataService.getUser().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      console.log(data.find(x=>x.email=='admin123@gmail.com'));
    });
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
  retrieveRestaurants(): void {
    this.dataService.getAllRestaurants().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.resturant = data;
      // console.log(data);
    });
  }

}







