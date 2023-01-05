import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  hide: boolean = false;
  admin!:FormGroup;
  constructor(private route: Router,private fb:FormBuilder,private cs:ServiceService) { }
  ngOnInit(): void {
   this.admin=this.fb.group({
    userName:['',],
    password:['',]
   })
  }
  
  adminLogin() {
   this.cs.getAdmin().subscribe(res=>{
    const user = res.find((a: any) => {
      return a.userName== this.admin.value.userName && a.password==this.admin.value.password
    });
    if(user){
      alert("Success");
      this.admin.reset();
      this.route.navigate(['/admin-dashboard']);
    }
    else{
      alert("Enter valid username and password")
      this.admin.reset();
    }
   });
   
  
  }
    this.route.navigate(['/customer-dashboard']);
  }
}
