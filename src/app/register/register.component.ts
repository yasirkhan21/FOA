import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../models/registerForm';
import { ServiceService } from '../service.service';
import { AuthService } from "src/app/shared/services/auth.service";
import { AdminLogin } from '../shared/services/admin-login';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private cs: ServiceService, public authService: AuthService, private dataService: DataService ) { }
  regform!: FormGroup;

  hide = true;
  ngOnInit(): void {
    this.regform = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern("^[a-zA-Z0-9_.-]*$")
      ]],
      mob: ['', [Validators.required, Validators.pattern("@^[0-9]{10}$")]],
      userName: ['', [Validators.required]],
      uid: ['', [Validators.required]],

    })

  }

  //for letter counting

  maxNumberOfCharacters = 60;
  counter = true;

  numberOfCharacters1 = 0;
  interaction = {
    textValue: ''
  }

  onKeyUp(event: any): void {
    this.numberOfCharacters1 = event.target.value.length;

    if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
      event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
      this.numberOfCharacters1 = this.maxNumberOfCharacters;
      window.alert("maximum limit exceeded");
    }
  }

  onSubmit() {
    this.authService.SignUp(this.regform.value.email, this.regform.value.password)
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user != null) {
      const userdata: AdminLogin = {
        id: user.uid,
        userName: user.displayName,
        email: user.email,
        mob: this.regform.value.mob,
        password: this.regform.value.password,
        uid:user.uid,
        fullName:this.regform.value.fullName
        
      }
      this.dataService.createUser(userdata).then(() => {
        console.log('Created new item successfully!');
      });
    }
    // this.cs.registerSave(this.regform.value).subscribe();
    window.alert("You have been registered!!!");
  }



}
