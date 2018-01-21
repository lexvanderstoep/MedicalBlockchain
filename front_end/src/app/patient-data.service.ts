import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PatientDataService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      // console.log(data);
    });
  }

  getJSON(): Observable<any> {
    // return this.http.get("http://" + location.hostname + ":5000/getLatest/111111111");
    return this.http.get("http://159.65.18.33:5000/getLatest/111111111");
  }

  postData(data): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://159.65.18.33:5000/pushToChain/111111111", {data: data});
  }

}
