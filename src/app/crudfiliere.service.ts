import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudfiliereService {
  responses:any;
  urlGet="http://127.0.0.1:8000/api/filieres";
  filiereData={
    filiere:"",
  }
  urlPost="http://127.0.0.1:8000/api/filiere";

  constructor(private http: HttpClient) {

   }

   sendRequest(url: string, object: any) {
    this.http.post<any>(url, object).subscribe();
  }

  getRequest(urlGet: string) {
    this.http.get(urlGet)
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
        console.log(responses);
    });
  }
}
