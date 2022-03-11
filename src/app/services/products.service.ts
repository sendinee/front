import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlApi;

  constructor(public http: HttpClient) {
    this.urlApi = "http://localhost:8000";
  }

  getProducts(){
    return this.http.get(this.urlApi + "/infoproducts/");
  }
  setPromotion(id: any, discount: string) {
    return this.http.get(this.urlApi + "/modifyDiscount/" + id + "/" + discount + "/");
  }
  addQuantity(id: string, quantity: string){
    return this.http.get(this.urlApi + "/incrementStock/" + id + "/" + quantity + "/");
  }
  removeQuantity(id: string, quantity: string) {
    return this.http.get(this.urlApi + "/decrementStock/" + id + "/" + quantity + "/");
  }
  getProductCategories(category: string){
    return this.http.get(this.urlApi + "/" + category + "/");
  }
  postTransaction(trans: any) {
    return this.http.post(this.urlApi + "/transactions/", trans);
  }
  getTransaction() {
    return this.http.get(this.urlApi + "/transactions/");
  }
  getTransactionCategory(category: string) {
    console.log(category)
    return this.http.get(this.urlApi + "/transactions/" + category + "/");
  }
}
