import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Panier } from '../models/panier';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { ListpanierPage } from '../listpanier/listpanier.page';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.page.html',
  styleUrls: ['./detailproduit.page.scss'],
})
export class DetailproduitPage implements OnInit {

  produits: any[]=[];
  panier: Panier;
  id: string;
  quantite: string;
  detailByProd: any[]=[];
  private qteCommande = 0;
  ajtPanier: any[]=[];
  nav: any;

  constructor(public http: HttpClient,
    public route: ActivatedRoute, private storage: Storage, 
    private router: Router, public alertController: AlertController) { 
    this.http.get('https://bakeliapi.000webhostapp.com/api/produits')
    .subscribe(data=>{
      this.produits=data["data"];
      for(let produit of this.produits ){
      if(produit.id==this.route.snapshot.paramMap.get('id')){
        console.log(produit.nomprod);
        this.detailByProd.push(produit);
      }
    }
    });

  
  }

  ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  
  }
  private increment(){
    this.qteCommande++;
  }
  private decrement(){
    this.qteCommande--;
  }

  
ajoutPanier(pw){
  
 const p = {
  'id': this.route.snapshot.paramMap.get('id'),
  'quantite': this.qteCommande
 }
  this.storage.get('Cart').then((ajtPanier)=>{
    if(ajtPanier == null ){
      ajtPanier = [];
    }
     
    
    this.ajtPanier= ajtPanier;
      this.ajtPanier.push(p);
  
      this.storage.set('Cart',this.ajtPanier)
        console.log('your ajtPanier =>', this.ajtPanier)
  
});
  
  
}


}


     
      
    
  



 
       
    
    
  


  


