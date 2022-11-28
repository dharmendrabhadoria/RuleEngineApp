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
    demo1TabIndex:any;
    selecteddata:any="";
    Fields:any = [] ;   
    Benefits:any = [];

  constructor(public dialog: MatDialog,private service:DataserviceService) {
    localStorage.setItem("expressionvalue","")
     sessionStorage.setItem("ProductID","");
     sessionStorage.setItem("FieldID","");
   }

  ngOnInit(): void {
    debugger;
    this.BindProducts();
   // this.BindProductDetails();
    this.demo1TabIndex=0;
    this.selecteddata="Select product";
  }

    /*checkbox change event*/
    onChange(event:any) {
      console.log(event)
    }
    openDialog(FieldID:any,ProductID:any,event:any) {
      debugger;
      console.log(ProductID);
      sessionStorage.setItem("ProductID",ProductID);
      sessionStorage.setItem("FieldID",FieldID);
      const dialogRef = this.dialog.open(EditorComponent,{
        height: '80%',
        width: '60%',
        disableClose: true
        
      });
  
      dialogRef.afterClosed().subscribe(result => {
        debugger;
        console.log(`Dialog result: ${result}`);
        this.demo1TabIndex=localStorage.getItem("TabIndex");
        let ProductID=  sessionStorage.getItem("ProductID");
        let FieldID=  sessionStorage.getItem("FieldID");
        let GetFormulaExpression=localStorage.getItem("expressionvalue");
        localStorage.setItem("TabIndex","1");
        


       
        
        /* Call Api for  insert Benifit field formual*/

        /* End This Calling part*/

        this.service.GetRulesProductInfo(ProductID).subscribe((res:any) => {
          // this.ProductDetailsList = res;  
            this.Fields = res.policyDetailsFields;
         this.Benefits = res.policyBenefitFields; 
        
         });

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

    // BindProductDetails(){
    //   this.service.getProductDetailJSON().subscribe((res:any) => {
    //     this.ProductDetailsList = res;      
    //   });

      
      
    // }

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
