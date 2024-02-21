import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  imports: [MatButtonModule,MatFormFieldModule, MatInputModule],
  })

export class SigninComponent {
  email: string = ' ';

  constructor(private router:Router){}

  onSubmit(form: NgForm) {
    // Handle form submission logic here
    console.log('Form submitted!', form.value);
  }
}
