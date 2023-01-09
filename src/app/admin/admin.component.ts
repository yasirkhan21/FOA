import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  hide: boolean = true;
  admin!:FormGroup;
  constructor(private route: Router,private fb:FormBuilder,private cs:ServiceService,private toast:ToastrService) { }
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
    this.toast.success("Login Success");
      // alert("Success");
      this.admin.reset();
      this.route.navigate(['/admin-dashboard']);
    }
    else{
     this.toast.error("Enter valid username and password");
      this.admin.reset();
    }
   },(error)=>{
    this.toast.error("Something went wrong!");
   });
   
  
  }

  reset(){
    this.admin.reset();
  }
    // this.route.navigate(['/customer-dashboard']);
  }

