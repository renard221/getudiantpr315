import { Routes } from '@angular/router';
import {Listetudiant} from './composant/listetudiant/listetudiant';
import {Addetudiant} from './composant/addetudiant/addetudiant';

export const routes: Routes = [

  {path:"",component:Listetudiant},
  {path:"list",component:Listetudiant},
  {path:"add",component:Addetudiant},
];
