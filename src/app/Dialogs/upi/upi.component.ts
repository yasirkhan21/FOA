import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PlaceOrderComponent } from '../place-order/place-order.component';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UPIComponent implements OnInit{
  constructor(public dialog: MatDialog,private fb:FormBuilder){}
  form!:FormGroup;

  openDialog()
  {
    this.dialog.open(PlaceOrderComponent,{
      width: '400px',
      height:'400px'
    });
  }
  ngOnInit():void{
  
  this.form=this.fb.group({
    upiId:['',[Validators.required]],
    mob:['',[Validators.required]],
    otp:['',[Validators.required,Validators.maxLength(6)]],

  })
}

payment()
{
  if(this.form.valid)
  {
   this.openDialog();
  }
  else{
    alert("Oops!!! Something went wrong")
  }
}
}
