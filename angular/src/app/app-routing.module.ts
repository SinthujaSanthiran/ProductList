import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { 
    component: ProductComponent,
    path: "product"
  },

  { 
    component: ProductComponent,
    path: "product/:_id"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
