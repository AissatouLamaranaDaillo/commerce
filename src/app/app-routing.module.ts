import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'categorie', pathMatch: 'full' },
  
  {
    path: 'categorie',
    loadChildren: () => import('./pages/auth/categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  

  {
    path: 'produit/:id',
    loadChildren: () => import('./pages/auth/produit/produit.module').then( m => m.ProduitPageModule)
  }, 
  
  
  
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'detailproduit/:id',
    loadChildren: () => import('./pages/auth/detailproduit/detailproduit.module').then( m => m.DetailproduitPageModule)
  },
  {
    path: 'listpanier',
    loadChildren: () => import('./pages/auth/listpanier/listpanier.module').then( m => m.ListpanierPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
