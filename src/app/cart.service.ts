import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable(
  {providedIn: 'root'
  })
  export class CartService {  
    items = [];

    constructor(
      private http: HttpClient
    ) {}

  // método anexa um produto a uma matriz de items.
    addToCart(product) {
      this.items.push(product);
    }

  //método coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada.
    getItems() {
      return this.items;
    }
  
  //método retorna uma matriz vazia de itens, que esvazia o carrinho.
    clearCart() {
      this.items = [];
      return this.items;
    }

    getShippingPrices() {
      return this.http.get('/assets/shipping.json');
    }
    
  }
