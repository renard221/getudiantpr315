import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgForOf} from '@angular/common';
import {checkCleanGit} from '@angular/cli/src/commands/update/utilities/git';
import {Detailsetudiant} from './composant/detailsetudiant/detailsetudiant';
import {Listetudiant} from './composant/listetudiant/listetudiant';
import {Addetudiant} from './composant/addetudiant/addetudiant';

@Component({
  selector: 'app-root',
  imports: [NgIf,NgForOf,Listetudiant,Addetudiant],
  templateUrl: './app.html',
  standalone:true,
  styleUrl: './app.scss'
})
export class App {

  titre ="Gestion etudiants";

  value=0;

  valstyle="width: 0%";


  plus(){
    this.value++;
    if (this.value >100){
      this.value = 100;
    }
    this.valstyle="width:"+this.value+"%";
  }
  moin(){
    if (this.value <0){
      this.value = 0;
    }
    this.value--;
    this.valstyle="width:"+this.value+"%";
  }





}
