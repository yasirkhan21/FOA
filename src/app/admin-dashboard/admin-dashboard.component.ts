import { Component, OnInit, TemplateRef } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../app/data.service';
import { map } from 'rxjs/operators';
import { Products } from '../shared/services/products';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  // constructor(private cs: ServiceService, private fb: FormBuilder, private dataService: DataService) { }
  // open: boolean = false;
  // list: boolean = false;
  // productForm!: FormGroup;
  // product!: Products[];
  // ngOnInit(): void {
  //   this.productForm = this.fb.group({
  //     productName: ['',],
  //     productImg: ['',],
  //     price: ['',]
  //   })

  //   this.retrieveProducts();
  // }
  // addFood() {
  //   if (this.productForm.valid) {
  //     this.cs.addProduct(this.productForm.value).subscribe();
  //     alert("Product Added")
  //     window.location.reload();
  //   }
  // }

  // deleteProduct(id: number = 0) {
  //   this.cs.deleteProduct(id).subscribe();
  //   alert("Product deleted")
  //   window.location.reload();
  // }

  // updateProduct(product: any) {

  // }

  // retrieveProducts(): void {
  //   this.dataService.getAllProducts().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(data => {
  //     this.product = data;
  //     console.log(data);
  //   });
  // }
  // saveTutorial(): void {
  //   this.dataService.createProducts(this.productForm.value).then(() => {
  //     console.log('Created new item successfully!');
  //   });
  // }

  // updateTutorial(): void {
  //   const data = {
  //     title: this.productForm.value.title,
  //     description: this.productForm.value.description
  //   };

  //   if (this.productForm.value.id) {
  //     this.dataService.updateProducts(this.productForm.value.id, this.productForm.value)
  //       .then(() => console.log('Created new item successfully!'))
  //       .catch(err => console.log(err));
  //   }
  // }

  // deleteTutorial(id: number = 0): void {
  //   if (id) {
  //     this.dataService.deleteProducts(id.toString())
  //       .then(() => {
  //         console.log('Created new item successfully!');
  //       })
  //       .catch(err => console.log(err));
  //   }
  constructor(
    private cs: ServiceService,
    private fb: FormBuilder, 
    private modalService: BsModalService, 
    private toast: ToastrService,
    private dataService: DataService) { }

  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  open: boolean = false;
  list: boolean = false;
  productForm!: FormGroup;
  products!: Products[];
  product!: Products;
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['',],
      productName: ['', [Validators.required]],
      productImg: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })
    // this.getProducts();
    this.retrieveProducts();
  }

  // adding new item in food
  addFood() {
    if (this.productForm.valid) {
      this.cs.addProduct(this.productForm.value).subscribe(res => {
        this.toast.success("Product added")
        // this.getProducts();
        this.retrieveProducts();
        this.list = true;
        this.open = false;

      });
    }
    else {
      this.toast.error("Enter valid value");
    }
  }

  // deleteProduct(id: number = 0) {
  //   this.cs.deleteProduct(id).subscribe();
  //   alert("Product deleted")
  //   window.location.reload();
  // }

  // updateProduct(product: any) {

  // }

  retrieveProducts(): void {
    this.dataService.getAllProducts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }
  saveProduct(): void {
    this.dataService.createProducts(this.productForm.value).then(() => {
      console.log('Created new item successfully!');
    });
  }

  updateProduct(pro:Products): void {
    if (pro.id) {
      this.dataService.updateProducts(pro.id.toString(), pro)
        .then(() => console.log('Created new item successfully!'))
        .catch(err => console.log(err));
    }
  }

  deleteProduct(id: number = 0): void {
    if (id) {
      this.dataService.deleteProducts(id.toString())
        .then(() => {
          console.log('Created new item successfully!');
        })
        .catch(err => console.log(err));
    }
  }
}
