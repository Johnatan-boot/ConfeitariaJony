import { Component, OnInit } from '@angular/core';
import { ApiService, CartService } from 'src/app/services';

@Component({
  selector: 'app-table-estoque',
  templateUrl: './table-estoque.component.html',
  styleUrls: ['./table-estoque.component.css']
})
export class TableEstoqueComponent implements OnInit {

  public estoque : any = [];
  public filterCategory : any
  searchKey:string ="";
   constructor(private api : ApiService, private cartService : CartService) { }


   ngOnInit(): void {


   //LISTAR ITENS DO ESTOQUE
    this.api.getEstoque()
    .subscribe((res: any)=>{
      this.estoque = res;
      this.filterCategory = res;
      this.estoque.forEach((a:any) => {
        if(a.category ===" produto " || a.category ===" quantidade "){
          a.category =" validade"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.estoque)
    });


  }

  //FILTRAR ITENS DO ESTOQUE

  filter(category:string){
    this.filterCategory = this.estoque
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  ///REMOVER ITENS DO ESTOQUE
  removeItem(estoque: any){
    this.cartService.removeCartItens(estoque);
  }

}
