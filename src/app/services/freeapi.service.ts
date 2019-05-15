import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpclient: HttpClient) { }

  getbooks(): Observable<any>{
    console.log("AQUI");
    return this.httpclient.get("http://localhost:8080/books");
  }
}
