import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {MessageService} from "primeng/api";
import {readPackageJson} from "@angular/cli/utilities/package-tree";

interface CoursData {
  name: string,
  matiere_id: string,
  filiere_id:number[],

}

interface ChapitreData {
  name: string,
  Text:string,
  Video: string,
  numeroChapitre : number,
  cours_id : number,
  filiere_id:number[],
}

interface PackData{
  name:string,
  cours_id:number[],
}


@Injectable({
  providedIn: 'root'
})

export class CrudService {
  // Element selectinne///////////////////////
  selectedCycle: any;
  selectedNiveau: any;
  selectedFiliere: any;
  seletedMatiere: any;
  selectedCours: any;
  //////////////////////////////////////////
  responses: any;
  responsesCycle: any;
  responsesNiveau: any;
  responsesFiliere: any;
  responsesMatiere: any;
  responsesCours: any;
  ////////////////////////////////////////
  selectedCycleList:any[]=[];
  selectedNiveauList:any[]=[];
  selectedFiliereList:any[]=[];
  selectedMatiereList:any[]=[];
  selectedCoursList:any[]=[];

  messageReturned: string="ceci est le detail du toast";
  sendData = {
    name: "",
  }
  //Crud-Filiere
  urlFiliereGet = environment.host + "filieresNiveau/";
  urlFilierePost = environment.host + "filiere";
  urlFiliereDelete = environment.host + "filiere/";
  urlFilierePut = environment.host + "filieres/";
  filiereData = {
    name: "",
    niveau_id:"",
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
  urlMatiereGet = environment.host + "matieresFiliere/";
  urlMatiereGetAll = environment.host + "matieres";
  urlMatierePost = environment.host + "matiere";
  urlMatiereDelete = environment.host + "matiere/";
  urlMatierePut = environment.host + "matiere/";
  matiereData = {
    name:"",
    filiere_id:[1],
    all:"",
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

  //Crud-pack
  urlPackGet = environment.host + "pack";
  urlPackPost = environment.host + "pack";
  urlPackDelete = environment.host + "pack/";
  urlPackPut = environment.host + "pack/";

  packData:PackData;


  ////////////////////////////////////////////////

  //Crud-Cours
  urlCoursGetForMatiere = environment.host + "coursMatiere/";
  urlCoursGetAll = environment.host + "cours/";
  urlCoursPost = environment.host + "cours";
  urlCoursDelete = environment.host + "cours/";
  urlCoursPut = environment.host + "cours/";
  urlCoursGet = environment.host + "cours/";
  coursData:CoursData;
  ////////////////////////////////////////////////////////////

  //Crud-Chapitres
  urlChapitresGetForOneCoursOneFiliere = environment.host +"chapitresCours/";
  urlChapitresGetAll = environment.host +"chapitres/";
  urlChapitresPost = environment.host + "chapitre";
  urlChapitresDelete = environment.host + "chapitre/";
  urlChapitresPut = environment.host + "chapitre/";
  chapitreData:ChapitreData;
  ////////////////////////////////////////////////////////////

  id: any;
  modification:boolean;



  constructor(private http: HttpClient,private messageService: MessageService) {
    //initialisation de coursData/////////////////////////////////////////////
    this.coursData={
      name: "",
        matiere_id: "",
        filiere_id:[]
    };

    this.chapitreData={
      name:"",
      Text:" ",
      Video: "",
      numeroChapitre : 0,
      cours_id : 0,
      filiere_id:[],
    }

    this.packData={
      name:"",
      cours_id:[],
    }

    this.modification=false;


  }
  showInfoDelete() {
    this.messageService.add({severity:'info', summary: 'Info', detail: this.messageReturned});
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

  getRequestParticuliere(urlGet: string,responseList: any) {
    //this.responsesCycle="outside";
    //console.log(responseList);
    this.http.get(urlGet)
      .subscribe(responses => {
        //console.log(responses);
        this.responses = responses;
          switch(responseList) {
            case 'cycle':
              this.responsesCycle=responses;
              break;
            case 'niveau':
              this.responsesNiveau=responses;
              break;
            case 'filiere':
              this.responsesFiliere=responses;
              break;
            case 'matiere':
              this.responsesMatiere=responses;
              break;
            case 'cours':
              this.responsesCours=responses;
              break;

          }

      }
      );
    //this.responsesCycle="hello";

  }

  getRequestMatiere(urlGet: string, object: any) {
    this.http.get(urlGet, object)
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
        this.showInfoDelete();
        //throw error;   //You can also throw the error to a global error handler
      }
    );
  }

  putRequest(url: string, object: any) {
    this.http.put<any>(url, object).subscribe();
  }
}
