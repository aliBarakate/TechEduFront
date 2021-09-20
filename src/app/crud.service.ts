import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {tryCatch} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Element selectinne///////////////////////
  selectedCycle: any;
  selectedNiveau: any;
  selectedFiliere: any;
  responses: any;
  messageReturned: any;
  sendData = {
    name: "",
  }
  //Crud-Filiere
  urlFiliereGet = environment.host + "filieres";
  urlFilierePost = environment.host + "filiere";
  urlFiliereDelete = environment.host + "filiere/";
  urlFilierePut = environment.host + "filieres/";
  filiereData = {
    name: "",
  }
  //////////////////////////////////////////////////////

  //Crud-Niveaux
  urlNiveauxGetForCycle = environment.host + "niveauxCycle/";
  urlNiveauxPost = environment.host + "niveau";
  urlNiveauxDelete = environment.host + "niveaux/";
  urlNiveauxPut = environment.host + "niveaux/";
  niveauxData = {
    name: "",
    cycle_id: "",
  }
  ////////////////////////////////////////////////////////////

  //Crud-matiere
  urlMatiereGet = environment.host + "matieres";
  urlMatierePost = environment.host + "matiere";
  urlMatiereDelete = environment.host + "matiere/";
  urlMatierePut = environment.host + "matiere/";
  matiereData = {
    matiere: "",
  }
  ////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////

  //Crud-cycle
  urlCycleGet = environment.host + "cycles";
  urlCyclePost = environment.host + "cycle";
  urlCycleDelete = environment.host + "cycle/";
  urlCyclePut = environment.host + "cycle/";

  ////////////////////////////////////////////////


  //Crud-corbeille-matiere
  urlCorbeilleMatiereGet = environment.host + "matiereCorbeille";
  urlCorbeilleMatierePost = environment.host + "matiere";
  urlCorbeilleMatiereDelete = environment.host + "matiere/";
  urlCorbeilleMatierePut = environment.host + "matiere/";

  ////////////////////////////////////////////////
  id: any;

  constructor(private http: HttpClient) {

  }

  sendRequest(url: string, object: any) {
    this.http.post<any>(url, object).subscribe();
  }

  getRequest(urlGet: string) {
    this.http.get(urlGet)
      .subscribe(responses => {
        console.log(responses);
        this.responses = responses;
        console.log(responses);
      });
  }

  deleteRequest(urlDelete: string) {
    this.http.delete(urlDelete).subscribe(        (response) => {                           //Next callback
        console.log('response received')
        this.responses = response;
      },
      (error) => {
      //Error callback
      this.messageReturned=error.error.text;
        console.error(error.error.text);
        console.log(this.messageReturned)

        //throw error;   //You can also throw the error to a global error handler
      }
    );
  }

  putRequest(url: string, object: any) {
    this.http.put<any>(url, object).subscribe();
  }
}
