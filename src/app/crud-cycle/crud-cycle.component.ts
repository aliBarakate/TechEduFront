import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-crud-cycle',
  templateUrl: './crud-cycle.component.html',
  styleUrls: ['./crud-cycle.component.css']
})
export class CrudCycleComponent implements OnInit {
  responses: any;
  http: any;

  constructor(http: HttpClient, private router: Router, public crud: CrudService) {
    this.crud.getRequest(this.crud.urlCycleGet);
  }

  onCreateNewElement() {
    this.crud.sendRequest(this.crud.urlCyclePost, this.crud.sendData);
    //setTimeout(function(){ location.href = "gestionFiliere"; }, 300);
    this.multipleGetRequest();


  }

  onDeleteElement(id: any) {
    this.crud.deleteRequest(this.crud.urlCycleDelete + id);
    this.multipleGetRequest();
  }

  onUpdateElement() {
    this.crud.putRequest(this.crud.urlCyclePut + this.crud.id, this.crud.sendData);
    this.multipleGetRequest();
  }

  multipleGetRequest() {
    for (let i = 0; i < 5; i++) {
      this.crud.getRequest(this.crud.urlCycleGet);
    }
  }


  onClickAfficherBtn(cycleId: string) {
    this.crud.selectedCycle = cycleId;
    console.log(this.crud.selectedCycle);
    this.router.navigate(['./gestionNiveaux']);
  }

  ngOnInit(): void {

  }

}
