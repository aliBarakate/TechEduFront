import { Component, OnInit } from '@angular/core';
import {CrudService} from "../crud.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  responsesMatieres:any;
  responsesCours:any;
  responsesChapitres:any;

  constructor(private http: HttpClient,public crud:CrudService) {

    this.getRequestMatiere(this.crud.urlMatiereGetAll);
    this.getRequestCours(this.crud.urlCoursGetAll);
    this.getRequestChapitres(this.crud.urlChapitresGetAll);

  }

  ngOnInit(): void {
  }

  getRequestMatiere(urlGet: string) {
    this.http.get(urlGet)
      .subscribe(responses => {
        console.log(responses);
        this.responsesMatieres = responses;
        console.log(responses);
      });
  }

  getRequestCours(urlGet: string) {
    this.http.get(urlGet)
      .subscribe(responses => {
        console.log(responses);
        this.responsesCours = responses;
        console.log(responses);
      });
  }

  getRequestChapitres(urlGet: string) {
    this.http.get(urlGet)
      .subscribe(responses => {
        console.log(responses);
        this.responsesChapitres = responses;
        console.log(responses);
      });
  }

}
