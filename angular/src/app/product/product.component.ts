import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import {MatDialog,MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product = new Product();

  productform = new FormGroup({
    productname: new FormControl(''),
    brandname: new FormControl(''),
    Price: new FormControl(''),
    shelvenumber: new FormControl(''),
    Purchasedate: new FormControl(''),
    AvailableQuantity: new FormControl(''),
  });

  constructor(private productservice: ProductService, private dialog:MatDialog) {}

  ngOnInit(): void {}

  save() {
    console.log('this.product');
    this.productservice.postProduct(this.product).subscribe((res) => {
      console.log('success');
    });
  }
  

  onSubmit( ) {
    console.warn(this.productform.value);
  }

  onClick() {
    this.dialog.open(ProductComponent);
  }
}