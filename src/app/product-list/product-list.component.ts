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
  // title = "Product list";
  //
  //   constructor(public dialog: MdDialog) { }
  //
  //   ngOnInit() {
  //   }
  //
  //   edit(data) {
  //     this.dialog.open(EditProductComponent, {
  //       width: '400px',
  //       data: {product: "product name", threshold: 1234}
  //     });
  //   }
}
