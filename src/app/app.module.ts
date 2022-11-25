import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoMaterialModule } from 'src/meterial-module';
import { EditorComponent } from './editor/editor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ProductmapinfoComponent } from './productmapinfo/productmapinfo.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { FieldmasterComponent } from './fieldmaster/fieldmaster.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProductmapComponent } from './productmap/productmap.component';
import { BenifimasterComponent } from './benifimaster/benifimaster.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    EditorComponent,
    ProductmapinfoComponent,
    FieldmasterComponent,
    ProductmapComponent,
    BenifimasterComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatDialogModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
