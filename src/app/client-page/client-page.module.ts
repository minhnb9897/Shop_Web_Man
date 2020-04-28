import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

@NgModule({
  declarations: [HomePageComponent, OrderPageComponent, ProductDetailsPageComponent, ProductPageComponent, InfoPageComponent],
  imports: [
    CommonModule
  ]
})
export class ClientPageModule { }
