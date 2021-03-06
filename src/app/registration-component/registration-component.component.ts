import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']

})
export class RegistrationComponentComponent implements OnInit {
  Nom :String;
  Prenom:String;
  Ville:String;
  Email:String;
  motDePasse:String;
  tel:String;
  cne:String;
  responses :any;
  http:any;





  constructor(http: HttpClient) {
    this.Nom="";
    this.Prenom="";
    this.Ville="";
    this.Email="";
    this.motDePasse="";
    this.tel="";
    this.cne="";
    responses :Object;


    http.get('http://127.0.0.1:8000/api/villes')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    });
   }

   onCreatePost(postData: {nom: string;
    prenom: string;
    cin: string;
    ville: string;
    groupeSanguin: string;
    tel: string
    mail: string;  }) {
// Send Http request
this.http
.post('http://127.0.0.1:8000/api/register',postData).subscribe();
}

afficherObjet(){
  console.log(this.Nom)
}

  ngOnInit(): void {
  }

}
