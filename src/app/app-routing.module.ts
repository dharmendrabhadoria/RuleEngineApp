import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BenifimasterComponent } from './benifimaster/benifimaster.component';
import { EditorComponent } from './editor/editor.component';
import { FieldmasterComponent } from './fieldmaster/fieldmaster.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductmapComponent } from './productmap/productmap.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductPageComponent},
  { path: 'editor', component: EditorComponent},
  
  {path:"fieldmaster",component:FieldmasterComponent},
  {path:"benifitmaster",component:BenifimasterComponent},
  {path:"productmap",component:ProductmapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
