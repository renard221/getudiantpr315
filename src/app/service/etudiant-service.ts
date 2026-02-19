import { Injectable } from '@angular/core';

export interface  Etudiant {
  id: number;
  prenom: any;
  nom: any;
}
@Injectable({
  providedIn: 'root',
})
export class EtudiantService {

  tabEtudiant:Etudiant[] = [
    {id:1,prenom:"serigne",nom:"diop"},
    {id:2,prenom:"modou",nom:"ndiaye"},
    {id:3,prenom:"sokhna",nom:"sarr"},
  ]

  addEtudiant(etudiant:Etudiant){
    this.tabEtudiant.push(etudiant);
  }
  getEtudiantById(id:number){
    /*for (let i = 0; i < this.tabEtudiant.length; i++) {
      if (this.tabEtudiant[i].id == id){
        return this.tabEtudiant[i]
      }
    }
    return null;*/
    return this.tabEtudiant.find(e=>e.id == id)

  }
  public getEtudiants(){
    return this.tabEtudiant
  }

  updateEtudiant(et:Etudiant){
    for (let i = 0; i < this.tabEtudiant.length; i++) {
      if (this.tabEtudiant[i].id == et.id){
       this.tabEtudiant[i] = et
      }
    }

  }



}
