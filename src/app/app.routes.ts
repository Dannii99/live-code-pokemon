import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadComponent: ()=> import('./pages/pokemon/pokemon.component').then((m)=> m.PokemonComponent)
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  }
];
