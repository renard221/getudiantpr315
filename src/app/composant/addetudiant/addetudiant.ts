import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addetudiant',
  imports: [FormsModule],
  templateUrl: './addetudiant.html',
  standalone:true,
  styleUrl: './addetudiant.scss',
})
export class Addetudiant {


  onSubmit(form:any){
    console.log(form.value);
  }

}
