import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PlaceOrderComponent } from '../place-order/place-order.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  form!:FormGroup;

  constructor(public dialog: MatDialog,private fb:FormBuilder){}
  openDialog()
  {
    this.dialog.open(PlaceOrderComponent,{
      width: '250px',
      height:'250px'
    });
  }
  
  namepattern!:"^[a-zA-Z ]{2,20}$";
  ngOnInit():void{
  
  this.form=this.fb.group({
    fullName:['',[Validators.required,Validators.pattern(this.namepattern)]],
    cardNo:['',[Validators.required]],
    date:['',[Validators.required]],
    cvv:['',[Validators.required,Validators.maxLength(3)]],
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
