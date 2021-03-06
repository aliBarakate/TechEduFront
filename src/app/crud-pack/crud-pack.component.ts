import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CrudService} from "../crud.service";

@Component({
  selector: 'app-crud-pack',
  templateUrl: './crud-pack.component.html',
  styleUrls: ['./crud-pack.component.css']
})
export class CrudPackComponent implements OnInit {
  responses:any;
  http:any;
  listePack:any[];

  constructor(http: HttpClient,private router : Router,public crud:CrudService) {
  this.listePack=[];

    this.crud.getRequest(this.crud.urlPackGet);
    console.log(this.crud.matiereData)
  }

  onCreateNewElement(){
    this.router.navigate(['./formPack']);
  }

  onDeleteElement(id:any){
    this.crud.deleteRequest(this.crud.urlPackDelete+id);
    this.multipleGetRequest();
  }

  onUpdateElement(){
    console.log(this.crud.matiereData);
    this.crud.putRequest(this.crud.urlMatierePut+this.crud.id,this.crud.matiereData);

    this.multipleGetRequest();
  }

  multipleGetRequest(){
    for ( let i = 0; i < 5; i++) {
      this.crud.getRequest(this.crud.urlPackGet);
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
