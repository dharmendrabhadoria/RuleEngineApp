

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbootstrap';
  //showFiller = false;
  constructor(public route:Router) { }
   ngOnInit() {
                //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  
  onroute(){
    this.route.navigate(['/productmapinfo']);
    
  }
  OnRouteHome(){
    this.route.navigate(['/product'])
  }

  FieldMaster(){
    const newLocal = '/fieldmaster';
    this.route.navigate([newLocal])
  }

  BenifitFieldMaster(){
    this.route.navigate(['benifitmaster'])
  }

  ProductMap(){
    this.route.navigate(['productmap'])
  }
}
