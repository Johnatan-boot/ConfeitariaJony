import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor() { }

  list(){
    return [  {_id:'1', produto:'Bolo A', quantidade:'2',validade:'28/05/23'}
  ];
  }
}
