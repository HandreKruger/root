import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private authService: AuthService) {
   }

  onCreate(form: NgForm) {
    this.authService.Create(
      // tslint:disable-next-line:max-line-length
      form.value.firstName, form.value.lastName, form.value.phoneNumber, form.value.email, form.value.password, form.value.company, form.value.region)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
        );
  }
}
