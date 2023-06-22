import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class CartPandaService {
  constructor(private restangular: Restangular) {}

  getAllProducts() {
    return this.restangular.all('products').getList();
  }
}
