import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminOrderListComponent } from './admin-order-list/admin-order-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductDetailsComponent } from './admin-product-details/admin-product-details.component';

@NgModule({
  declarations: [AdminComponent, AdminNavbarComponent, AdminProductListComponent, AdminProductComponent, AdminMainComponent, AdminOrderComponent, AdminOrderListComponent, AdminLoginComponent, AdminProductDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminDashboardModule { }
