import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { Product } from './models/product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,
   NgbModule,
   HttpClientModule,
   BrowserAnimationsModule,
   MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ProductComponent]
  
})
export class AppModule {


 }
