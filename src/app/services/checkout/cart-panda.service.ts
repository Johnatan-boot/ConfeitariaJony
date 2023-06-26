import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartPandaService {
  private apiUrl = 'https://confeitaria-do-jony.mycartpanda.com';

  constructor(private http: HttpClient) {}

  getProducts() {
    const token = '6VwnxU03pznr0MoEnbh49vWraqeaDqhYf2pbBEz1JoFOmMrbMPk4oqNAc3Pi';
    const url = `${this.apiUrl}products?token=${token}`;
    return this.http.get(url);
  }
}
