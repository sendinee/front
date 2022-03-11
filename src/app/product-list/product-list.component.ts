import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  share() {
    window.alert('Ce produit a été partager!');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
