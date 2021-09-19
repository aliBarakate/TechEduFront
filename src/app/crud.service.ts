import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Element selectinne///////////////////////
  selectedCycle: any;
  selectedNiveau: any;
  selectedFiliere: any;
  responses: any;
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
  urlNiveauxGet = environment.host + "niveauxCycle/";
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
    this.http.delete(urlDelete).subscribe();
  }

  putRequest(url: string, object: any) {
    this.http.put<any>(url, object).subscribe();
  }
}
