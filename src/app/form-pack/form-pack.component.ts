import { Component, OnInit } from '@angular/core';
import {CrudService} from "../crud.service";

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

  selectedCycle:string[]=[""];
  selectedNiveau:string[]=[""];
  selectedFiliere:string[]=[""];
  selectedMatiere:string[]=[""];








  cities: City[];

  selectedCities: City[]=[];

  constructor(public crud: CrudService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.crud.getRequest(this.crud.urlCycleGet);

  }

  ngOnInit(): void {
  }

}
