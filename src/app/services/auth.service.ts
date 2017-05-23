import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  Create(firstName: string, lastName: string, phoneNumber: string, email: string, password: string, company: string, region: string) {
    return this.http.post('http://localhost:8000/api/user',
           // tslint:disable-next-line:max-line-length
           {firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, password: password, company: company, region: region},
           {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
  }

  signin(email: string, password: string) {
    return this.http.post('http://localhost:8000/api/user/signIn',
           {email: email, password: password},
           {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
              (response: Response) => {
                const token = response.json().token;
                const base64Url = token.split('.') [1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                return {token: token, decoded: JSON.parse(window.atob(base64))};
              }
            )
    .do(
      tokenData => {
        localStorage.setItem('token', tokenData.token);
      }
    );
  }

}
