import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { RegisterForm } from '../models/registerForm';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:ServiceService){}
  regform!:FormGroup;

  hide=true;
  ngOnInit(): void {
    this.regform = this.fb.group({
      fullName:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['', [ Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")
    ]],
      mob:['',[Validators.required,Validators.pattern("@^[0-9]{10}$")]],
      userName:['',[Validators.required]],
      address:['',[Validators.required]],

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

  onSubmit(){
    this.cs.registerSave(this.regform.value).subscribe();
    window.alert("You have been registered!!!");
   }
  


}
