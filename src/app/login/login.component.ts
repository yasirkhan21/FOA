import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterForm } from '../models/registerForm';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:ServiceService,private router:Router){}
  regform!:FormGroup;
  r!:RegisterForm[];
  hide = true;

  ngOnInit(): void {
    this.regform = this.fb.group({
      userName:['',[Validators.required]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")
    ]], 
    });
    this.cs.loginGetData().subscribe(
      {
        next:(res)=>
        {
            console.log(res)
            this.r=res
            console.log(res)
        },
        error:(err)=>
        {
          console.log(err)
        }
      }
    )
    console.log(this.r);
  
  }


  onSubmit(){
   this.r.forEach(element => {
    console.log(element.userName  )
    if(element.userName==this.regform.value.userName && element.password==this.regform.value.password)
    {
      // this.router.navigate(['/']);
      window.alert("Successful login");
    }
   });
    this.cs.registerSave(this.regform.value).subscribe();
   }
}
