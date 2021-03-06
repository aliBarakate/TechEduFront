import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CrudService} from "../crud.service";

@Component({
  selector: 'app-crud-cours',
  templateUrl: './crud-cours.component.html',
  styleUrls: ['./crud-cours.component.css']
})
export class CrudCoursComponent implements OnInit {
  responses:any;
  http:any;

  constructor(http: HttpClient,private router : Router,public crud:CrudService) {


    this.crud.getRequest(this.crud.urlCoursGetForMatiere+this.crud.seletedMatiere+"/"+this.crud.selectedFiliere);
    console.log(this.crud.matiereData)
  }

  onCreateNewElement(){
    this.settingJsonObjectParameters();
    this.crud.sendRequest(this.crud.urlCoursPost,this.crud.coursData);
    this.multipleGetRequest();
    this.settingJsonObjectNull();
  }

  onDeleteElement(id:any){
    this.crud.deleteRequest(this.crud.urlCoursDelete+id);
    this.multipleGetRequest();
  }

  onUpdateElement(){
    this.settingJsonObjectParameters()
    //console.log(this.crud.matiereData);
    this.crud.putRequest(this.crud.urlCoursPut+this.crud.id,this.crud.coursData);

    this.multipleGetRequest();
    this.settingJsonObjectNull();
  }

  multipleGetRequest(){
    for ( let i = 0; i < 5; i++) {
      this.crud.getRequest(this.crud.urlCoursGetForMatiere+this.crud.seletedMatiere+"/"+this.crud.selectedFiliere);
    }
  }

  onClickAfficherBtn(coursId:string){
    this.crud.selectedCours=coursId;
    console.log(this.crud.selectedCycle);
    this.router.navigate(['./gestionChapitres']);
  }

  settingJsonObjectNull(){
    this.crud.coursData.name="";
    this.crud.coursData.matiere_id="";
    this.crud.coursData.filiere_id=[];
  }

  settingJsonObjectParameters(){
    this.crud.coursData.matiere_id=this.crud.seletedMatiere;
    this.crud.coursData.filiere_id.push(this.crud.selectedFiliere);
  }

  ngOnInit(): void {

  }

}
