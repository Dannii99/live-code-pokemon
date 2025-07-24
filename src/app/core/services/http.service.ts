import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  name = new Subject<any>;

  constructor(private httpClient: HttpClient) { }

  getPokemon(name:string) {
    this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${!name ? '' : name}`).subscribe({
      next: (value) => {
        console.log(value)
        this.setName(value)
      }
    })
  }


  setName(item:any) {
    this.name.next(item)
  }

  getName(): Observable<any> {
    return this.name.asObservable()
  }
}
