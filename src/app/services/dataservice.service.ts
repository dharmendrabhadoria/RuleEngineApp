import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  public LoadBenificiaryMaster(){

    return  this.httpClient.get(environment.apiURL+"LoadBenificiaryMaster");
      }
public LoadFieldMaster(){

return  this.httpClient.get(environment.apiURL+"LoadFieldMaster");
  }
public insertBenificiaryFieldMaster(strtxtBenificiaryFieldName:any,strtxtBenificiaryType:any,strtxtBenificiaryFieldPurpose:any,strtxtBenificiaryFieldFormula:any,strCreatedBy:any){
  return  this.httpClient.get(environment.apiURL+"insertBenificiaryFieldMaster?strtxtBenificiaryFieldName="+strtxtBenificiaryFieldName+
  "&strtxtBenificiaryType="+
  strtxtBenificiaryType+"&strtxtBenificiaryFieldPurpose="+
  strtxtBenificiaryFieldPurpose+"&strtxtBenificiaryFieldFormula="+strtxtBenificiaryFieldFormula+"&strCreatedBy="+strCreatedBy);
}
public GetOperationFunctionName(OperationType:any){
  return  this.httpClient.get(environment.apiURL+"GetOperationName?OperationType="+OperationType)

}
public GetOperatorString(){
  return  this.httpClient.get(environment.apiURL+"GetOperatorString");

}
public GetOperationName(OperationType:any){
  return  this.httpClient.get(environment.apiURL+"GetOperationName?OperationType="+OperationType)

}
public LoadProductField(ProductID:any){
  return  this.httpClient.get(environment.apiURL+"GetProductFiledForFormulaCreation?ProductID="+ProductID)

}
  public InsertFieldMaster(strtxtFieldName:any,strtxtType:any,
    strtxtDescription:any,strCreatedBy:any){
    return  this.httpClient.get(environment.apiURL+"InsertFieldMaster?strtxtFieldName="+strtxtFieldName+"&strtxtType="+
    strtxtType+"&strtxtDescription="+
    strtxtDescription+"&strCreatedBy="+strCreatedBy);
  }

  public GetRulesProductInfo(ProductID:any){
    return  this.httpClient.get(environment.apiURL+"fetchRuleCreationDataOnProductID?ProductID="+ProductID)
  }
  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/product.json")
  }

  public getProductDetailJSON(): Observable<any> {
    return this.httpClient.get("./assets/productdetail.json")
  }
  SaveInfo(params:any){
    return  this.httpClient.get(environment.apiURL+"SaveProductMappingInfo?paramsd="+params)
   }

  GetproductFieldInfoData(param:any){
    return  this.httpClient.get(environment.apiURL+"GetproductFieldInfoData?param="+param);
  
  }
  GetBenificiaryFieldInfoData(param:any){
    return  this.httpClient.get(environment.apiURL+"GetBenificiaryFieldInfoData?param="+param);
  }
  GetData(){
    return  this.httpClient.post(environment.apiURL+"FetchFieldMappingInfo",null)
   }

   GetProductMaster(){
    return  this.httpClient.post(environment.apiURL+"FetchProductInfo",null)
   }
   GetProductFieldInfo(){
    return  this.httpClient.post(environment.apiURL+"FetchProductFieldInfo",null)
   }
   GetBenificiaryFieldInfo(){
    return  this.httpClient.post(environment.apiURL+"FetchBenificiaryFieldInfo",null)
   }


   

   Pnb_benifit_formula(obj:any){


    var data = new FormData();
data.append("ProductID", obj.ProductID);
data.append("FieldID",obj.FieldID );
data.append("Formula",obj.Formula );
data.append("CreatedBy",obj.CreatedBy );
    let Formula=(obj.Formula).replace("+","_");
    return  this.httpClient.post(environment.apiURL+"Pnb_benifit_formula",data)
  
    //return  this.httpClient.get(environment.apiURL+"Pnb_benifit_formula1?ProductID="+obj.ProductID+"&FieldID="+obj.FieldID+"&Formula="+Formula+"&CreatedBy="+obj.CreatedBy)
   }
   
}

