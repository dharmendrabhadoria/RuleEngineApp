import { Component, OnInit,Renderer2 ,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
//import * as $ from 'jquery';
@Component({
  selector: 'app-productmapinfo',
  templateUrl: './productmapinfo.component.html',
  styleUrls: ['./productmapinfo.component.css']
})
export class ProductmapinfoComponent implements OnInit {

  Settext:any=true;
  Productstr:any="";
  BenificiaryStr:any="";
  
  arr:any;
  GetBenificiaryArr:any;
  ProductArr:any;
  ProductFieldArr:any;
  BenificiaryArr:any;
  form!: FormGroup;submitted = false;
  SelectProductMappingInfo:any="";
  SelectBenificiaryMappingInfo:any="";
  // constructor(private Router:Router,private webApiService:ServiceInfoService,private renderer:Renderer2) {
   
  //  }

  
  constructor(private webApiService:DataserviceService,private fb: FormBuilder,private Router:Router,private renderer:Renderer2) {
   
  }

  
  ngOnInit(): void {
    document.getElementById('id01')?.setAttribute("style","display:none");
    document.getElementById('id02')?.setAttribute("style","display:none");
    this.GetProductMaster();
    this.form = this.fb.group({

      ddlProduct: [false]
    });
   
  }
  GetProductMaster(){
    debugger;
    var f=this.webApiService.GetProductMaster().subscribe(result =>{
      debugger;
     this.ProductArr=result;
    //this.arr=v.LCls_ProductMaster;
    });

  }

  GetProductFieldInfo(){
    debugger;
    var f=this.webApiService.GetProductFieldInfo().subscribe(result =>{
      debugger;
     this.ProductFieldArr=result;
    //this.arr=v.LCls_ProductMaster;
    });

  }
  GetBenificiaryFieldInfo(){
    debugger;
    var f=this.webApiService.GetBenificiaryFieldInfo().subscribe(result =>{
      debugger;
     this.BenificiaryArr=result;
    //this.arr=v.LCls_ProductMaster;
    });

  }
  
  
  
  SaveInfo(){
    //console.log(this.form.value.ddlProduct);
    if(this.form.value.ddlProduct==false || this.form.value.ddlProduct=="Select"){
      alert("Please select product Name");
      return false;
    }
   else{

debugger;
console.log(this.SelectBenificiaryMappingInfo.length);

if(this.SelectProductMappingInfo.length==0){
  alert("Please select product filed for mapping operation");
  return false;
}
else if(this.SelectBenificiaryMappingInfo.length==0){
  alert("Please select benificiary filed for mapping operation");
  return false;
}
   else{
    const apidata={
   
      BenificiaryStr:JSON.stringify(this.SelectBenificiaryMappingInfo),
      Productstr:JSON.stringify(this.SelectProductMappingInfo),
      ProductID:this.form.value.ddlProduct
     }
      this.webApiService.SaveInfo(JSON.stringify(apidata)).subscribe((result:any) =>{
        debugger;
       alert(result.Table[0].Column1)
      });
      return true;
   }
   }
  
    

  }
  onBenificiaryField(){
   // $("#id02").css("display","block");
  // document.getElementById('id02')?.setAttribute("style","display:block");
  document.getElementById('myModalbf')?.setAttribute("style","display:block")
    //console.log("open Customers .....");
    this.GetBenificiaryFieldInfo();
   
  }

  onproductField(){

    document.getElementById('myModal')?.setAttribute("style","display:block")
    //$("#id01").css("display","block");
   
    //document.getElementById('id01')?.setAttribute("style","display:block");
      //console.log("open Customers .....");
      
      this.GetProductFieldInfo();
       // data=>{this.customercontactList=data;},
       // error=>{ console.error(error);} );
  
      
      
      //this.modalService.open(CustomerContactcontent);
    
    
  }

  onCloseCustomerContact(){
    debugger;
    var array = [];
    var elements = document.getElementsByName("vas_123");
for(let i=0;i<elements.length;i++){
var element = <HTMLInputElement>elements[i];
if(element.type == "checkbox"){
if(element.checked){
array.push({"Id":element.id,"Value":element.value});
}
}
}
    //this.modalService.dismissAll(CustomerContactcontent);
  }
  close(){
   
    //document.getElementById("id01")
    //document.getElementById('id01')?.style.display='none'
    //$("#id01").css("display","none");

    //document.getElementById('id01')?.setAttribute("style","display:none");
  //  document.getElementById('myModal')?.setAttribute("style","display:none")
  document.getElementById('myModal')?.setAttribute("style","display:none")
  }

  close2(){
   
    //document.getElementById("id01")
    //document.getElementById('id01')?.style.display='none'
   // $("#id02").css("display","none");
   document.getElementById('myModalbf')?.setAttribute("style","display:none")
  }
  
  ProductmappingFn(){
    let flgpfset=false;
    debugger;
    let varProductFieldId="";
    var array = [];
    var elements = document.getElementsByName("vas_123");
for(let i=0;i<elements.length;i++){
var element = <HTMLInputElement>elements[i];
if(element.type == "checkbox"){
if(element.checked){
array.push({"Id":element.id,"Value":element.value});
varProductFieldId=varProductFieldId+element.id+",";
flgpfset=true;
}
}
}
if(flgpfset==true){
  var f=this.webApiService.GetproductFieldInfoData(varProductFieldId).subscribe((result:any) =>{
    debugger;
    //this.GetBenificiaryArr=result;
   
   this.SelectProductMappingInfo=result.Table;
   this.close();
  });
}
else{
  alert("Please select at least one item");
}

//this.SelectProductMappingInfo=array;
//this.close();
 }


  BenificiarymappingFn(){
let setbfflg=false;
    this.BenificiaryArr.filter((x:any)=>x.ProductBenificiaryID );
    debugger;
    let varBenificiaryId="";
    var array = [];
    var elements = document.getElementsByName("vas_0001");
for(let i=0;i<elements.length;i++){
var element = <HTMLInputElement>elements[i];
if(element.type == "checkbox"){
if(element.checked){
array.push({"Id":element.id,"Value":element.value});
varBenificiaryId=varBenificiaryId+element.id+",";
setbfflg=true;
}
}
}

if(setbfflg==true){
  var f=this.webApiService.GetBenificiaryFieldInfoData(varBenificiaryId).subscribe((result:any) =>{
    debugger;
    this.GetBenificiaryArr=result;
   
   this.SelectBenificiaryMappingInfo=result.Table;
   this.close2();
  });
}
else{
  alert("Please select at least one item")
}

 
  }
}
