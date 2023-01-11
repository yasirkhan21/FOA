import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "src/app/shared/services/auth.service";
import { RegisterForm } from '../models/registerForm';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:ServiceService,private router:Router,public authService: AuthService){}
  regform!:FormGroup;
  r!:RegisterForm[];
  hide = true;

  ngOnInit(): void {
    this.regform = this.fb.group({
      userName:['',[Validators.required]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")
    ]], 
    });

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
  window.location.reload();
}
}