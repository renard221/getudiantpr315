import {inject, Injectable} from '@angular/core';
import {Etudiant} from '../model';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

const baseUrl = 'http://localhost:8000/api/etudiants';

// @ts-ignore
@Injectable({
  providedIn: 'root',
})
export class EtudiantService {

  http = inject(HttpClient);



  addEtudiant(etudiant:Etudiant){
    return this.http.post(baseUrl,etudiant);
  }
  getEtudiantById(id:number){
    /*for (let i = 0; i < this.tabEtudiant.length; i++) {
      if (this.tabEtudiant[i].id == id){
        return this.tabEtudiant[i]
      }
    }
    return null;*/
    //return this.tabEtudiant.find(e=>e.id == id)

  }
  public getEtudiants():Observable<Etudiant[]>{
      return this.http.get<Etudiant[]>(baseUrl).pipe(
         map(rep=>
               rep.map(p=>  (
                 {
                   ...p,
                   verified: false
                 }
               ))
        )
      )
  }

  updateEtudiant(et:Etudiant){


  }



}
