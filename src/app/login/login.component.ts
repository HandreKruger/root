import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: FormGroup;

  constructor( private formBuilder: FormBuilder, private httpService: HttpService) {

    this.login = formBuilder.group({
      email: new FormControl (''),
      password: new FormControl (''),
      });
  }

  onsubmit() {
    this.httpService.sendData(this.login.value)
      .subscribe(
        user => console.log(user)
      );
  }


}
