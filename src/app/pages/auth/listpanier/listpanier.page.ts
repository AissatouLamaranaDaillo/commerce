import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-listpanier',
  templateUrl: './listpanier.page.html',
  styleUrls: ['./listpanier.page.scss'],
})
export class ListpanierPage implements OnInit {

  id: string;
ajtPanier: any[]=[];
produits : any[]=[];
  qteCommande: any;
 

  constructor( private storage: Storage, 
    public route: ActivatedRoute, public http: HttpClient
    ) {
    
     
     this.http.get('https://bakeliapi.000webhostapp.com/api/produits')
     .subscribe(data=>{
       this.produits=data["data"];

     })

      

     }

  ngOnInit() {
   
    this.id= this.route.snapshot.paramMap.get('id');
  
  
  }
  

  ionViewWillEnter(){
    this.storage.get('Cart')
      .then((ajtPanier)=>{
      this.ajtPanier= ajtPanier;
      

      
  });
  this.ajtPanier.forEach(p =>{p.quantite = 0});
  
  }
  

    increment(p ){
    p.quantite++;
    return this.storage.set('Cart', this.ajtPanier);
  }

    decrement(p){
     p.quantite --
  }
  remove(p , index:number){
    return this.getCartitems().then((ajtPanier)=>{
      if(ajtPanier){
        var index = this.ajtPanier.indexOf(p);
        this.ajtPanier.splice(index,1);
        return this.storage.set('Cart', this.ajtPanier);
      

      }
    })
  }  
  

  getCartitems(){
    return this.storage.get('Cart')

  }
 

  
  

}
