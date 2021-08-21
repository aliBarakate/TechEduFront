import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudfiliereService } from '../crudfiliere.service';

@Component({
  selector: 'app-crud-filiere-component',
  templateUrl: './crud-filiere-component.component.html',
  styleUrls: ['./crud-filiere-component.component.css'],
  providers : [CrudfiliereService],
})
export class CrudFiliereComponentComponent implements OnInit {
  responses:any;
  http:any;
  suivantactivated =false;
  millisecondsToWait = 500;

  constructor(http: HttpClient,private router : Router,public crudFiliere:CrudfiliereService) {


    this.crudFiliere.getRequest(this.crudFiliere.urlGet);

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

    onCreateNewFiliere(){
      this.crudFiliere.sendRequest(this.crudFiliere.urlPost,this.crudFiliere.filiereData);

      setTimeout(function(){ location.href = "gestionFiliere"; }, 300);



    }

    onDeleteElement(id:any){
      this.crudFiliere.deleteRequest(this.crudFiliere.urlDelete+id);
      setTimeout(function(){ location.href = "gestionFiliere"; }, 300);
    }

    onUpdateElement(){
      this.crudFiliere.putRequest(this.crudFiliere.urlPut+this.crudFiliere.id,this.crudFiliere.filiereData);

      setTimeout(function(){ location.href = "gestionFiliere"; }, 300);
    }

ngOnInit(): void {

}

}
