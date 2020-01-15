import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { ProduitService } from 'src/app/services/produit.service';
import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
  providers:[ProduitService]
})
export class ProduitPage implements OnInit {
  produits: any[]=[];
id: string;
quantite: string;

prodBycat: any[]=[];

  constructor( public http: HttpClient, private produitService: ProduitService,
    public route: ActivatedRoute,
    ) {
      this.http.get('https://bakeliapi.000webhostapp.com/api/produits')
      .subscribe(data=>{
        this.produits=data["data"];

      for(let produit of this.produits ){
        if(produit.id_cat==this.route.snapshot.paramMap.get('id')){
          console.log(produit.nomprod);
          this.prodBycat.push(produit);
        }

      }
      });    
}

  
  ngOnInit() {
  this.id= this.route.snapshot.paramMap.get('id');
  console.log(this.id);
 
  }



}
   


