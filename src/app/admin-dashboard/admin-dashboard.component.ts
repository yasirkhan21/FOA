import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../app/data.service';
import { map } from 'rxjs/operators';
import { Products } from '../shared/services/products';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private cs: ServiceService, private fb: FormBuilder, private dataService: DataService) { }
  open: boolean = false;
  list: boolean = false;
  productForm!: FormGroup;
  product!: Products[];
  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['',],
      productImg: ['',],
      price: ['',]
    })
    //  this.cs.getProduct().subscribe(list=>{
    //   this.product=list;
    //  })
    this.retrieveProducts();
  }
  addFood() {
    if (this.productForm.valid) {
      this.cs.addProduct(this.productForm.value).subscribe();
      alert("Product Added")
      window.location.reload();
    }
  }

  deleteProduct(id: number = 0) {
    this.cs.deleteProduct(id).subscribe();
    alert("Product deleted")
    window.location.reload();
  }

  updateProduct(product: any) {

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
      console.log(data);
    });
  }
  saveTutorial(): void {
    this.dataService.createProducts(this.productForm.value).then(() => {
      console.log('Created new item successfully!');
    });
  }

  updateTutorial(): void {
    const data = {
      title: this.productForm.value.title,
      description: this.productForm.value.description
    };

    if (this.productForm.value.id) {
      this.dataService.updateProducts(this.productForm.value.id, this.productForm.value)
        .then(() => console.log('Created new item successfully!'))
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(id: number = 0): void {
    if (id) {
      this.dataService.deleteProducts(id.toString())
        .then(() => {
          console.log('Created new item successfully!');
        })
        .catch(err => console.log(err));
    }
  }
}
