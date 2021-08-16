import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-http-second',
  templateUrl: './inscription-http-second.component.html',
  styleUrls: ['./inscription-http-second.component.css']
})
export class InscriptionHttpSecondComponent implements OnInit {






    suivantactivated =false;

  constructor(private http: HttpClient,private router : Router) {

}

  onCreatePost(postData: {name: string;
                          prenom: string;
                          ville: string;
                          email: string;
                          tel: string;
                          cne: string;
                            }) {
    // Send Http request

    this.http
      .post(
        'http://127.0.0.1:8000/api/register',
        postData
      )
      .subscribe(responseData => {
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
