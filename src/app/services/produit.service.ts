import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient: HttpClient) { }

  public detailProd(){
    return this.httpClient.get('http://192.168.137.47:8000/api/produits');
  }

}

