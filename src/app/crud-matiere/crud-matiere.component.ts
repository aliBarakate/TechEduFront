import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-matiere',
  templateUrl: './crud-matiere.component.html',
  styleUrls: ['./crud-matiere.component.css']
})
export class CrudMatiereComponent implements OnInit {
  responses:any;
  http:any;

  constructor(http: HttpClient,private router : Router,public crud:CrudService) {


    this.crud.getRequest(this.crud.urlMatiereGet+this.crud.selectedFiliere);
    console.log(this.crud.matiereData)
  }

    onCreateNewElement(){

      this.crud.sendRequest(this.crud.urlMatierePost,this.crud.matiereData);
      this.multipleGetRequest();
    }

    onDeleteElement(id:any){
      this.crud.deleteRequest(this.crud.urlMatiereDelete+id);
      this.multipleGetRequest();
    }

    onUpdateElement(){
    console.log(this.crud.matiereData);
      this.crud.putRequest(this.crud.urlMatierePut+this.crud.id,this.crud.matiereData);

      this.multipleGetRequest();
    }

    multipleGetRequest(){
      for ( let i = 0; i < 5; i++) {
        this.crud.getRequest(this.crud.urlMatiereGet+this.crud.selectedFiliere);
      }
    }

    onClickAfficherBtn(cycleId:string){
       this.crud.selectedCycle=cycleId;
       console.log(this.crud.selectedCycle);
       this.router.navigate(['./pageEditor']);
    }

ngOnInit(): void {

}

}
