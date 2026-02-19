import {Component, Inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Etudiant, EtudiantService} from '../../service/etudiant-service';

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
  etInjectService  = Inject(EtudiantService);

  public constructor(private etService:EtudiantService ) {
  }


  onSubmit(){
    console.log(this.etService.getEtudiants());
    let prenom  =this.formGroup.value.prenom
    let et:Etudiant={
      id:this.etService.getEtudiants()[this.etService.getEtudiants().length-1].id,
      prenom:this.formGroup.value.prenom,
      nom:this.formGroup.value?.nom,
    }
    this.etService.addEtudiant(et);

    console.log(this.etService.getEtudiants());


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
