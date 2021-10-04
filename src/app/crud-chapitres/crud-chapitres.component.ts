import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CrudService} from "../crud.service";

@Component({
  selector: 'app-crud-chapitres',
  templateUrl: './crud-chapitres.component.html',
  styleUrls: ['./crud-chapitres.component.css']
})
export class CrudChapitresComponent implements OnInit {
  responses: any;
  http: any;

  constructor(http: HttpClient, private router: Router, public crud: CrudService) {


    this.crud.getRequest(this.crud.urlChapitresGetForOneCoursOneFiliere + this.crud.selectedCours + "/" + this.crud.selectedFiliere);
    console.log(this.crud.matiereData)
  }

  onCreateNewElement() {
    this.router.navigate(['./pageEditor']);
  }

  onDeleteElement(id: any) {
    this.crud.deleteRequest(this.crud.urlChapitresDelete + id);
    this.multipleGetRequest();
  }

  onUpdateElement(id:any,response:any) {
    this.crud.modification=true;
    this.crud.id=id;
    this.crud.chapitreData.name=response.name;
    this.crud.chapitreData.Text=response.text;
    this.crud.chapitreData.Video=response.Video;
    this.crud.chapitreData.numeroChapitre=response.numeroChapitre;
    this.settingJsonObjectParameters()
    //console.log(this.crud.matiereData);
    this.router.navigate(['./pageEditor']);

    //this.multipleGetRequest();
    //this.settingJsonObjectNull();
  }

  multipleGetRequest() {
    for (let i = 0; i < 5; i++) {
      this.crud.getRequest(this.crud.urlChapitresGetForOneCoursOneFiliere + this.crud.selectedCours + "/" + this.crud.selectedFiliere);
    }
  }

  onClickAfficherBtn(coursId: string) {

    this.crud.selectedCours = coursId;
    console.log(this.crud.selectedCycle);
    this.router.navigate(['./pageEditor']);
  }

  settingJsonObjectNull() {
    this.crud.coursData.name = "";
    this.crud.chapitreData.Video = "";
    this.crud.chapitreData.numeroChapitre = 0;
    this.crud.chapitreData.cours_id = 0;
    this.crud.chapitreData.filiere_id = [];
  }

  settingJsonObjectParameters() {
    this.crud.coursData.matiere_id = this.crud.seletedMatiere;
    this.crud.coursData.filiere_id.push(this.crud.selectedFiliere);
  }


  ngOnInit(): void {

  }

}
