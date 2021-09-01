import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-corbeille-matiere',
  templateUrl: './corbeille-matiere.component.html',
  styleUrls: ['./corbeille-matiere.component.css'],
  providers : [CrudService],
})
export class CorbeilleMatiereComponent implements OnInit {
  responses:any;
  http:any;
  suivantactivated =false;
  millisecondsToWait = 500;

  constructor(http: HttpClient,private router : Router,public crud:CrudService) {


    this.crud.getRequest(this.crud.urlCorbeilleMatiereGet);

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
      this.crud.sendRequest(this.crud.urlMatierePost,this.crud.sendData);

      //setTimeout(function(){ location.href = "gestionFiliere"; }, 300);
      this.multipleGetRequest();


    }

    onDeleteElement(id:any){
      this.crud.deleteRequest(this.crud.urlMatiereDelete+id);
      this.multipleGetRequest();
    }

    onUpdateElement(){
      this.crud.putRequest(this.crud.urlMatierePut+this.crud.id,this.crud.sendData);

      this.multipleGetRequest();
    }

    multipleGetRequest(){
      for ( let i = 0; i < 5; i++) {
        this.crud.getRequest(this.crud.urlCorbeilleMatiereGet);
      }
    }

ngOnInit(): void {

}

}
