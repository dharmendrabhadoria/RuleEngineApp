import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenificiarymasterComponent } from './benificiarymaster/benificiarymaster.component';
import { EditorComponent } from './editor/editor.component';
import { FieldmasterComponent } from './fieldmaster/fieldmaster.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductmapinfoComponent } from './productmapinfo/productmapinfo.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductPageComponent},
  { path: 'editor', component: EditorComponent},
  {path:"productmapinfo",component:ProductmapinfoComponent},
  {path:"fieldmaster",component:FieldmasterComponent},
  {path:"benificiarymaster",component:BenificiarymasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
