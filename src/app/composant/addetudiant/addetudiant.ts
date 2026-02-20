import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { EtudiantService} from '../../service/etudiant-service';
import {Etudiant} from '../../model';

@Component({
  selector: 'app-addetudiant',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './addetudiant.html',
  standalone:true,
  styleUrl: './addetudiant.scss',
})
export class Addetudiant {

  fb = new FormBuilder();
  formGroup = this.fb.group({
    prenom:["",[Validators.required,Validators.minLength(4)]],
    nom:["",[Validators.required]],
    email:["",[Validators.required,Validators.email]],
    montant:[0,[Validators.required]],

  })
  etInjectService  = inject(EtudiantService);

  public constructor(private etService:EtudiantService ) {
  }


  onSubmit(){
    //console.log(this.etService.getEtudiants());
    let prenom  =this.formGroup.value.prenom
    let et:Etudiant={
      prenom:this.formGroup.value.prenom,
      nom:this.formGroup.value?.nom,
      email:this.formGroup.value?.email,
      montant:this.formGroup.value?.montant,
    }
    console.log(et)
    this.etService.addEtudiant(et).subscribe({
      next:(data=>{
        console.log(data);

    }),
      error:(err=>{console.log(err)})
    })

    //console.log(this.etService.getEtudiants());


  }


  validate(inputname:any){
    const  formcontrol = this.formGroup.get(inputname);
    if(formcontrol?.invalid&&(formcontrol?.touched ||formcontrol?.dirty)){

      return true;
    }else {

      return false;
    }
  }
}
