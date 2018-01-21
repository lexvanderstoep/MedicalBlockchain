import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PatientDataService {
  headers;
  options;

  constructor(private http: HttpClient) {}

  getJSON(): Promise<any> {
    return this.http.get("http://159.65.18.33:5000/getLatest/111111111").toPromise();
  }

  getPatient(id): Promise<any> {
    return this.http.get("http://159.65.18.33:5000/getLatest/" + id).toPromise();
  }

  postData(data): Promise<any> {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    // return this.http.get("http://159.65.18.33:5000/getLatest/111111111/test/notes_test").toPromise();
    return this.http.post("http://159.65.18.33:5000/addToRecord/111111111", {data: data}, this.headers).toPromise();
  }

}
