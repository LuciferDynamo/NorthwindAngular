import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  {path: "", component:ProductComponent},
  {path: "products", component:ProductComponent},
  {path: "products/category/:categoryId", component:ProductComponent},  
  {path:"products/add", component:ProductAddComponent},
  {path:"login", component:UserLoginComponent},
  {path:"register", component:UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
