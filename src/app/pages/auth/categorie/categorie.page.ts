import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProduitPage } from '../produit/produit.page';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {
  userList: any[] = [];
  id: number;
  
  
  constructor( public http: HttpClient, private router: Router,
    public navCtrl: NavController, 
    private produitService: ProduitService) { 
    this.http.get('https://bakeliapi.000webhostapp.com/api/categories')
  .subscribe(data=>{
    this.userList=data["data"];
  console.log(this.userList);
  });
  }
  
/*onLoadProduits(){
  this.produitService.detailProd()
  .subscribe(data=>{
    this.userList=data["data"];
    console.log(this.userList);
  });*/


  ngOnInit() {
  }

 
   
openDetail(id){
  this.router.navigateByUrl('produit/' + this.id);
}
}