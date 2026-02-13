import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

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


  onSubmit(){
    console.log(this.formGroup.value);
    console.log(this.formGroup.invalid);
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
