import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {

  search: FormControl = new FormControl(null);

  ability: any[]  = []

  constructor(private _httpService:HttpService) {}

  ngOnInit(): void {

    this._httpService.getName().subscribe({
      next: (value) => {
        this.ability = value.abilities;
      }
    })

    this.search.valueChanges .pipe(
    debounceTime(1000),            // espera 1000 ms después de que el usuario deja de escribir
    distinctUntilChanged()        // solo emite si el valor cambió respecto al anterior
    ).subscribe({
      next: (value)=> {
        this._httpService.getPokemon(value);
      }
    })
  }

}
