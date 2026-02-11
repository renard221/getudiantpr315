import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Etudiant} from '../../model';

@Component({
  selector: 'app-detailsetudiant',
  imports: [],
  templateUrl: './detailsetudiant.html',
  standalone: true,
  styleUrl: './detailsetudiant.scss',
})
export class Detailsetudiant {
  @Input() etudiant!:Etudiant;
  @Output() verified= new EventEmitter<number>();


  envoyerVerification(){
    this.verified.emit(this.etudiant.id);

  }

}
