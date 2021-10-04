import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CrudService} from "../crud.service";



@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {
  text: any;
  text2:string=' ';
  html:string=" ";
  paragraph: string = `
  You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.
  You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$.
  In first case you will need to use \\$expression\\$ and in the second one \\$\\$expression\\$\\$.
  To scape the \\$ symbol it's mandatory to write as follows: \\\\$
`;

  onCreateNewElement(){
    this.settingJsonObjectParameters();
    if (this.crud.modification==true){
      this.crud.putRequest(this.crud.urlChapitresPut+this.crud.id,this.crud.chapitreData);
    }else {
      this.crud.sendRequest(this.crud.urlChapitresPost,this.crud.chapitreData);
    }

    this.multipleGetRequest();
    this.settingJsonObjectNull();
    this.crud.modification=false;
    this.router.navigate(['./gestionChapitres']);
  }

  multipleGetRequest(){
    for ( let i = 0; i < 5; i++) {
      this.crud.getRequest(this.crud.urlChapitresGetForOneCoursOneFiliere+this.crud.selectedCours+"/"+this.crud.selectedFiliere);
    }
  }

  settingJsonObjectNull(){
    this.crud.chapitreData.name="";
    this.crud.chapitreData.Video="";
    this.crud.chapitreData.numeroChapitre=0;
    this.crud.chapitreData.cours_id=0;
    this.crud.chapitreData.filiere_id=[];
  }

  settingJsonObjectParameters(){
    this.crud.chapitreData.cours_id=this.crud.selectedCours;
    this.crud.chapitreData.filiere_id.push(this.crud.selectedFiliere);
    this.crud.chapitreData.filiere_id.push(this.crud.selectedFiliere);
  }

  onUpdateElement(){
    this.settingJsonObjectParameters()
    //console.log(this.crud.matiereData);
    this.crud.putRequest(this.crud.urlChapitresPut+this.crud.id,this.crud.chapitreData);

    this.multipleGetRequest();
    this.settingJsonObjectNull();
    this.router.navigate(['./gestionChapitres']);
  }

  constructor(http: HttpClient,private router : Router,public crud:CrudService) { }

  ngOnInit(): void {
  }

}
