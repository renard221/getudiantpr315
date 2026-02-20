import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {Etudiant} from '../../model';
import {Detailsetudiant} from '../detailsetudiant/detailsetudiant';
import {FormsModule} from '@angular/forms';
import {EtudiantService} from '../../service/etudiant-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-listetudiant',
  imports: [Detailsetudiant,FormsModule],
  templateUrl: './listetudiant.html',
  standalone: true,
  styleUrl: './listetudiant.scss',
})
export class Listetudiant {
  detectChange = inject(ChangeDetectorRef);
  tabEtudiants:Etudiant[] = [

  ]
  public constructor(private etService:EtudiantService ) {

    this.getEtudiants()
  }

  couleur="red";


  etudiantVerification(id:number){
    let et = this.tabEtudiants.find((e:Etudiant)=>e.id==id);
    if(et){
      et.verified = true;
    }
  }

  getEtudiants(){
      this.etService.getEtudiants().subscribe({
        next:(data=>{
          console.log(data)

          this.tabEtudiants = data
          this.detectChange.detectChanges();
        }),
        error:(err=>{
          console.log(err)
        })
      })
  }
}

