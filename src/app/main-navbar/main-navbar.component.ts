import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onLoadLoginPage(){
    this.router.navigate(['./login']);
  }

  onLoadMainPage(){
    this.router.navigate(['./']);
  }

  onLoadInscriptionPage(){
    this.router.navigate(['./inscription']);
  }

  onLoadeditorPage(){
    this.router.navigate(['./pageEditor']);
  }
  onLoadgestionFiliere(){
    this.router.navigate(['./gestionFiliere']);
  }
  onLoadgestionNiveaux(){
    this.router.navigate(['./gestionNiveaux']);
  }
  onLoadgestionMatieres(){
    this.router.navigate(['./gestionMatiere']);
  }
  onLoadgestionCycles(){
    this.router.navigate(['./gestionCycles']);
  }
  onLoadCorbeilleMatiere(){
    this.router.navigate(['./corbeilleMatiere']);
  }
  onLoadGestionPack(){
    this.router.navigate(['./gestionPack']);
  }
  onLoadGestionCours(){
    this.router.navigate(['./gestionCours']);
  }
  onLoadGestionChapitres(){
    this.router.navigate(['./gestionChapitres']);
  }
}
