import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  sendData(user: any) {
    const body = user;
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/root', 'options', 'body')
      .map((response: Response) => user.json());
  }

}
