import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form-pack',
  templateUrl: './form-pack.component.html',
  styleUrls: ['./form-pack.component.css']
})
export class FormPackComponent implements OnInit {

  listeCycle: any;
  listeNiveau: any;
  listeFiliere: any;
  listeMatiere: any;

  selectedCycle:string="";
  selectedNiveau:string="";
  selectedFiliere:string="";
  selectedMatiere:string="";

  selectedCycleupdate:string="";
  selectedNiveauupdate:string="";
  selectedFiliereupdate:string="";
  selectedMatiereupdate:string="";




  constructor() {

  }

  ngOnInit(): void {
  }

}
