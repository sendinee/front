import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsProductComponent } from "./details-product/details-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ManageStockComponent } from "./manage-stock/manage-stock.component";



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detailsProduit', component: DetailsProductComponent },
  { path: 'productList', component: ProductListComponent},
  { path: 'manageStock', component: ManageStockComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
