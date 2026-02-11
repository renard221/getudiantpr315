import { Component } from '@angular/core';
import {Etudiant} from '../../model';
import {Detailsetudiant} from '../detailsetudiant/detailsetudiant';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-listetudiant',
  imports: [Detailsetudiant,FormsModule],
  templateUrl: './listetudiant.html',
  standalone: true,
  styleUrl: './listetudiant.scss',
})
export class Listetudiant {
  tabEtudiants:Etudiant[] = [
    {id:1,prenom:"serigne",nom:"diop",verified:false},
    {id:2,prenom:"modou",nom:"ndiaye",verified:true},
    {id:3,prenom:"fatou",nom:"sarr",verified:false},
    {id:4,prenom:"matar",nom:"sene",verified:false}
  ]

  couleur="red";


  etudiantVerification(id:number){
    let et = this.tabEtudiants.find((e:Etudiant)=>e.id==id);
    if(et){
      et.verified = true;
    }
  }
}

