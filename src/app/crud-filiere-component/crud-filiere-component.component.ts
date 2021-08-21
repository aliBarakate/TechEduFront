import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-filiere-component',
  templateUrl: './crud-filiere-component.component.html',
  styleUrls: ['./crud-filiere-component.component.css']
})
export class CrudFiliereComponentComponent implements OnInit {
  responses:any;
  http:any;
  suivantactivated =false;

  constructor(http: HttpClient,private router : Router) {


    http.get('http://127.0.0.1:8000/api/filieres')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    });

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
location.href = "receveur";
}

onLoadLoginPage(){
this.router.navigate(['./confirmationSMS']);
}

ngOnInit(): void {

}

}
