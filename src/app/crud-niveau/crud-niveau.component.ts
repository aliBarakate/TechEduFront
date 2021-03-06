import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CrudService} from '../crud.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-crud-niveau',
  templateUrl: './crud-niveau.component.html',
  styleUrls: ['./crud-niveau.component.css'],

})
export class CrudNiveauComponent implements OnInit {
  cycle: any;
  text: any;
  responses: any;
  http: any;
  message: any;

  constructor(http: HttpClient, private router: Router, public crud: CrudService) {
    console.log(crud.selectedCycle);
    this.crud.getRequest(this.crud.urlNiveauxGetForCycle + this.crud.selectedCycle);
    console.log(this.crud.urlNiveauxGetForCycle + this.crud.selectedCycle);
  }


  onCreateNewElement() {
    this.crud.niveauxData.cycle_id = this.crud.selectedCycle;
    this.crud.sendRequest(this.crud.urlNiveauxPost, this.crud.niveauxData);

    this.multipleGetRequest();
    console.log(this.crud.niveauxData);

  }

  onDeleteElement(id: any,) {
    this.crud.deleteRequest(this.crud.urlNiveauxDelete + id);
    this.multipleGetRequest();
  }

  onUpdateElement() {

    this.crud.putRequest(this.crud.urlNiveauxPut + this.crud.id, this.crud.niveauxData);

    this.multipleGetRequest();

  }

  multipleGetRequest() {
    for (let i = 0; i < 5; i++) {
      this.crud.getRequest(this.crud.urlNiveauxGetForCycle + this.crud.selectedCycle);
    }
  }

  afficher() {
    console.log(this.crud.selectedCycle);
  }

  onClickAfficherBtn(selectedId: string) {
    this.crud.selectedNiveau = selectedId;


    console.log(this.crud.selectedNiveau);
    this.router.navigate(['./gestionFiliere']);
  }

  ngOnInit(): void {
    console.log("l'id du cycle selectionne est " + this.crud.selectedCycle);
  }

}

