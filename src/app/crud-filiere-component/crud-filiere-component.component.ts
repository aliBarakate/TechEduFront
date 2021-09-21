import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-crud-filiere-component',
  templateUrl: './crud-filiere-component.component.html',
  styleUrls: ['./crud-filiere-component.component.css']
})
export class CrudFiliereComponentComponent implements OnInit {
  responses: any;
  http: any;


  constructor(http: HttpClient, private router: Router, public crud: CrudService) {
    console.log("l'id du niveau séléctioné est :"+this.crud.selectedNiveau)

    this.crud.getRequest(this.crud.urlFiliereGet+this.crud.selectedNiveau);
    this.crud.filiereData.niveau_id=this.crud.selectedNiveau;

  }

  onCreateNewElement() {
    this.crud.sendRequest(this.crud.urlFilierePost, this.crud.filiereData);
    this.multipleGetRequest();
  }

  onDeleteElement(id: any) {
    this.crud.deleteRequest(this.crud.urlFiliereDelete + id);
    this.multipleGetRequest();
  }

  onUpdateElement() {
    this.crud.putRequest(this.crud.urlFilierePut + this.crud.id, this.crud.filiereData);
    this.multipleGetRequest();
  }

  multipleGetRequest() {
    for (let i = 0; i < 5; i++) {
      this.crud.getRequest(this.crud.urlFiliereGet+this.crud.selectedNiveau);
    }
  }

  onClickAfficherBtn(cycleId: string) {
    this.crud.selectedCycle = cycleId;


    console.log(this.crud.selectedCycle);
    this.router.navigate(['./gestionMatiere']);
  }

  ngOnInit(): void {

  }

}
