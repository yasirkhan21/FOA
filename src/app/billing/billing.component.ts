import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';
import { DataService } from '../data.service';
import { CancelOrderComponent } from '../Dialogs/cancel-order/cancel-order.component';
import { CardComponent } from '../Dialogs/card/card.component';
import { OrderConfirmedComponent } from '../Dialogs/order-confirmed/order-confirmed.component';
import { PlaceOrderComponent } from '../Dialogs/place-order/place-order.component';
import { RemoveCouponComponent } from '../Dialogs/remove-coupon/remove-coupon.component';
import { UPIComponent } from '../Dialogs/upi/upi.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {

constructor(public dialog: MatDialog,private service:ServiceService,private dataService : DataService) {}
cartList!:any[];
itemName!:string;
cost!:number;
grandTotal:number=0;
ret!:number;
id!:number;
clicked:Boolean=false;
tax:number=0;
coupon:number=30;
couponBool:Boolean=false;
b:Boolean=false;
user:any;

  ngOnInit(): void {
    this.getCartItem();
    this.user = JSON.parse(localStorage.getItem('user')!);
     console.log(this.user)
  }

  //-----------------methods for calculating bill-------------------------------------------------------

  totalCost():number
  {
    this.clicked=true;
    this.b=true;
   for(let i=0;i<=this.cartList.length;i++)
   {
    this.cost=this.cartList[i].price;
    this.itemName=this.cartList[i].productName;
    this.tax=(0.05*this.cartList[i].price) as number;
    this.grandTotal=(+this.grandTotal  + +this.tax + +this.cartList[i].price) as number;
    if(i==this.cartList.length-1) break;
   }
   return this.grandTotal;
  }
couponApplied():number
{
  this.couponBool=true;
   this.clicked=true;
  this.ret=(this.totalCost()) as number
  this.grandTotal=this.ret-this.coupon;
  window.alert("Coupon Applied!!!"+"Price reduced to:"+this.grandTotal);
  return this.grandTotal;
}
couponRemoved()
{
  this.couponBool=true;
  this.grandTotal=(this.grandTotal + 30.00)as number;
  this.openDialog1();
}

cancelOrder(key:string)
{
this.removeCartItem(key);
}

//-------------methods for dialog boxes---------------------------------------------------
openDialog()
{
  this.dialog.open(PlaceOrderComponent,{
    width: '400px',
    height:'400px'
  });
}

openDialog1()
{
  this.dialog.open(RemoveCouponComponent,{
    width: '250px',
    height:'250px'
  });
}
openDialog2()
{
  this.dialog.open(CancelOrderComponent,{
    width: '250px',
    height:'250px'
  });
}

openDialog3()
{
  this.dialog.open(CardComponent,{
    width: '350px',
    height:'400px'
  });
}

openDialog4()
{
  this.dialog.open(UPIComponent,{
    width: '350px',
    height:'350px'
  });
}
openDialog5()
{
  this.dialog.open(OrderConfirmedComponent,{
    width: '250px',
    height:'250px'
  });
}

//--------------------------method for getting the list of items in cart--------------------

getCartItem(): void {
  this.dataService.getAllCarts().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {
    this.cartList = data.filter(x => x.userId == this.dataService.getUserId());
    console.log(data)
  });
}

removeCartItem(key: string): void {
  console.log(key);
  if (key) {
    this.dataService.deleteCarts(key.toString())
      .then(() => {
        console.log('Created new item successfully!');
      })
      .catch(err => console.log(err));
  }
}

}
