import { Component, OnInit } from '@angular/core';
import {CrudService} from "../crud.service";
import {Router} from "@angular/router";

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-form-pack',
  templateUrl: './form-pack.component.html',
  styleUrls: ['./form-pack.component.css']
})
export class FormPackComponent implements OnInit {

  listeCycle: any=[];
  listeNiveau: any=[];
  listeFiliere: any=[];
  listeMatiere: any=[];
  listeCours: any=[];

  onCreateNewElement() {
    for(let i =0;i<this.crud.selectedCoursList.length;i++){
      this.crud.packData.cours_id.push(this.crud.selectedCoursList[i].id);
    }
    this.crud.sendRequest(this.crud.urlPackPost, this.crud.packData);
    //setTimeout(function(){ location.href = "gestionFiliere"; }, 300);
    this.multipleGetRequest();
    this.router.navigate(['./gestionPack']);

  }
  multipleGetRequest() {
    for (let i = 0; i < 5; i++) {
      this.crud.sendRequest(this.crud.urlCyclePost, this.crud.sendData);
    }
  }



  constructor(public crud: CrudService, private router: Router) {


  this.crud.getRequestParticuliere(this.crud.urlCoursGet,'cours');
    //this.crud.getRequestParticuliere(this.crud.urlNiveauxGetForCycle,'matiere');

    //this.crud.getRequest(this.crud.urlCoursGet);



  }

  ngOnInit(): void {
  }

}
