import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  
})

export class AppComponent {
  title = 'angular';
  products: any[] = [];
  
  constructor(
    private router: ActivatedRoute,
    private productservice: ProductService
  ) {}

  _id: String | null = null;
  ngOnInit(): void {
    this.productservice.getProduct().subscribe((res) => {
      this.products = res;
    });
  }
 /*
  updateProduct(_id:String) {
    this.productservice.updateProduct(this.products._id,this.products).subscribe(
      ( res: any[]) => {
        console.log(res);
        this.products = res;
      },
      ( err: any) => {
        console.log(err)
      })
  }
deleteProduct(_id:String){
    this.productservice.deleteProduct(_id).subscribe(
    (    data: { n: number; }) =>{
      if(data.n==1){
  for(var i=0; i<this.products.length;i++){
    if(this.products[i]._id==_id){
      this.products.splice(i,1);
  }
      } }
})}
*/
}
