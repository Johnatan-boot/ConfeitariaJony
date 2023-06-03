import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models';




@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})


export class EstoqueComponent implements OnInit {
  produtos: Produtos[] = [
    {_id:'1',produto:'Bolo de Chocolate',quantidade:'2',validade:'28/05/23'},
    {_id:'2',produto:'Bolo de Baunilha',quantidade:'21',validade:'02/09/23'},
    {_id:'3',produto:'Bolo de Laranja',quantidade:'17',validade:'11/07/23'}
  ];
  ngOnInit(): void {
  }

}
