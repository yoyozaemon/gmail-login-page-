import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers: [FormBuilder]
})

export class SigninComponent implements OnInit{
  // email: string = ' ';
  inputForm:FormGroup; 
email: any;
  constructor(private router:Router,
    private fb:FormBuilder){
      
      this.inputForm=this.fb.group({
        email:['',Validators.required]
      })
    }
  ngOnInit(): void {
  }

  onSubmit() {
   
    console.log('Form submitted!', this.inputForm.value);
  }


}
