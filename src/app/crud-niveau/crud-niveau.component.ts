import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Subscription } from 'rxjs';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-crud-niveau',
  templateUrl: './crud-niveau.component.html',
  styleUrls: ['./crud-niveau.component.css'],
  providers : [CrudService],
})
export class CrudNiveauComponent implements OnInit {
  cities: City[];
  cycle:any;

  selectedCity: any;

  is_active_dropdown:Boolean;
  responses:any;
  http:any;
  suivantactivated =false;
  millisecondsToWait = 500;
  message:any;

  subscription: Subscription|null=null;

  constructor(http: HttpClient,private router : Router,public crud:CrudService) {
    console.log(crud.selectedCycle);
    
    this.is_active_dropdown= false;

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

    this.crud.getRequest(this.crud.urlNiveauxGet+this.crud.selectedCycle);
    console.log(this.crud.urlNiveauxGet+this.crud.selectedCycle);


  }

  onCreatePost(postData: {filiere: string;

      }) {
// Send Http request

this.http
.post(
'http://127.0.0.1:8000/api/filiere',
postData
)
.subscribe((responseData: any) => {
  console.log(responseData);
});
}

onSelectedElementList(){

}
activatesuivant(){
this.suivantactivated=true;
}
relocate_home()
{
location.href = "gestionFiliere";
}

onLoadLoginPage(){
this.router.navigate(['./confirmationSMS']);
}

    onCreateNewElement(){
      this.crud.sendRequest(this.crud.urlNiveauxPost,this.crud.niveauxData);

      //setTimeout(function(){ location.href = "gestionFiliere"; }, 300);
      this.multipleGetRequest();


    }

    onDeleteElement(id:any){
      this.crud.deleteRequest(this.crud.urlNiveauxDelete+id);
      this.multipleGetRequest();
    }

    onUpdateElement(){
      this.crud.putRequest(this.crud.urlNiveauxPut+this.crud.id,this.crud.niveauxData);

      this.multipleGetRequest();
    }

    multipleGetRequest(){
      for ( let i = 0; i < 5; i++) {
        this.crud.getRequest(this.crud.urlNiveauxGet);
      }
    }

    onClickDropDown(){
      if (this.is_active_dropdown==false){
        this.is_active_dropdown=true;
      }
      else{
        this.is_active_dropdown=false;
      }
    }

    afficher(){
      console.log(this.crud.selectedCycle);
    }

    onClickAfficherBtn(cycleId:string){
      this.crud.selectedCycle=cycleId;

     
       console.log(this.crud.selectedCycle);
       this.router.navigate(['./gestionFiliere']);
    }

ngOnInit(): void {

  this.crud.getRequest(this.crud.urlNiveauxGet+this.crud.selectedCycle);
  console.log(this.crud.urlNiveauxGet+this.crud.selectedCycle);
 

 



}

}

