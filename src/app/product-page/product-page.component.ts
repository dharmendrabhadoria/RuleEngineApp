import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditorComponent } from '../editor/editor.component';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
   price:number = 25.00;
    Product :any = [];
    ProductDetailsList :any =[];
  
    Fields:any = [] ;   
    Benefits:any = [];

  constructor(public dialog: MatDialog,private service:DataserviceService) {
    
   }

  ngOnInit(): void {
    this.BindProducts();
    this.BindProductDetails();
  }

    /*checkbox change event*/
    onChange(event:any) {
      console.log(event)
    }
    openDialog(ProductID:any,event:any) {
      debugger;
      console.log(ProductID);
      const dialogRef = this.dialog.open(EditorComponent,{
        height: '80%',
        width: '60%',
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    BindProducts(){
      this.service.GetProductMaster().subscribe((res:any) => {
        this.Product = res;      
      });
      // this.service.getJSON().subscribe((res:any) => {
      //   this.Product = res;      
      // });
    }

    BindProductDetails(){
      this.service.getProductDetailJSON().subscribe((res:any) => {
        this.ProductDetailsList = res;      
      });

      // this.service.GetRulesProductInfo().subscribe((res:any) => {
      //   debugger;
      //   this.ProductDetailsList = res;      
      // });
      
    }

    onProductChange(value:any,event:any){
      debugger;
      this.service.GetRulesProductInfo(value).subscribe((res:any) => {
       // this.ProductDetailsList = res;  
         this.Fields = res.policyDetailsFields;
      this.Benefits = res.policyBenefitFields;    
      });

      // const res = this.ProductDetailsList.filter((object:any) => value == object.id);

      // this.Fields = res[0]["policyDetailsFields"];
      // this.Benefits = res[0]["policyBenefitFields"];
    }
}
