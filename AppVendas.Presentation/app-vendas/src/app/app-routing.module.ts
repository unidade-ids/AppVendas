import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent, data: { title: 'List of Products' }},
  { path: 'product-details/:id', component: ProductDetailComponent, data: { title: 'Product detail' }}, 
  { path: 'product-add', component: ProductAddComponent, data: { title: 'Add Product' }},
  { path: 'product-edit/:id', component: ProductEditComponent, data: { title: 'Edit Product' }},
  { path: '', redirectTo: '/products', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
