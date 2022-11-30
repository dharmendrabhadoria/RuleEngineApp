import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }


  /* Bonus table Info*/
  public GetBonusTableInfo(TableName:any){
    return  this.httpClient.get(environment.apiURL+"GetBonusTableInfo?TableName="+TableName)
  
  }
  /*End this part */
  /* Benifit Master Info*/
  public insertBenificiaryFieldMaster(strtxtBenificiaryFieldName:any,strtxtBenificiaryType:any,strtxtBenificiaryFieldPurpose:any,strtxtBenificiaryFieldFormula:any,strCreatedBy:any){
    return  this.httpClient.get(environment.apiURL+"insertBenificiaryFieldMaster?strtxtBenificiaryFieldName="+strtxtBenificiaryFieldName+
    "&strtxtBenificiaryType="+
    strtxtBenificiaryType+"&strtxtBenificiaryFieldPurpose="+
    strtxtBenificiaryFieldPurpose+"&strtxtBenificiaryFieldFormula="+strtxtBenificiaryFieldFormula+"&strCreatedBy="+strCreatedBy);
  }

  public LoadBenificiaryMaster(){

    return  this.httpClient.get(environment.apiURL+"LoadBenificiaryMaster");
      }
  /* Benifit Master Info End */

  /*Editor  Info */

  public GetOperatorString(){
    return  this.httpClient.get(environment.apiURL+"GetOperatorString");
  
  }
  public GetOperationName(OperationType:any){
    return  this.httpClient.get(environment.apiURL+"GetOperationName?OperationType="+OperationType)
  
  }
  
public LoadProductField(ProductID:any){
  return  this.httpClient.get(environment.apiURL+"GetProductFiledForFormulaCreation?ProductID="+ProductID)

}


Pnb_benifit_formula(obj:any){


  var data = new FormData();
data.append("ProductID", obj.ProductID);
data.append("FieldID",obj.FieldID );
data.append("Formula",obj.Formula );
data.append("CreatedBy",obj.CreatedBy );
  
  return  this.httpClient.post(environment.apiURL+"Pnb_benifit_formula",data)
 }
  /*Editor Info End */
 
  /* Field Master */

  public InsertFieldMaster(strtxtFieldName:any,strtxtType:any,
    strtxtDescription:any,strCreatedBy:any){
    return  this.httpClient.get(environment.apiURL+"InsertFieldMaster?strtxtFieldName="+strtxtFieldName+"&strtxtType="+
    strtxtType+"&strtxtDescription="+
    strtxtDescription+"&strCreatedBy="+strCreatedBy);
  }

  public LoadFieldMaster(){

    return  this.httpClient.get(environment.apiURL+"LoadFieldMaster");
      }
  /*Field Master End */

  /*Product Page Info */

  GetProductMaster(){
    return  this.httpClient.post(environment.apiURL+"FetchProductInfo",null)
   }

  public GetRulesProductInfo(ProductID:any){
    return  this.httpClient.get(environment.apiURL+"fetchRuleCreationDataOnProductID?ProductID="+ProductID)
  }
  /*Product Page Info End */


  /*Product Map  */
  SaveInfo(params:any){
    debugger;
    (JSON.parse(params).BenificiaryStr);
let y=JSON.stringify((JSON.parse(params).BenificiaryStr));
let p=JSON.stringify((JSON.parse(params).Productstr));
let d=JSON.stringify(JSON.parse(params).ProductID);
    var data = new FormData();
    data.append("BenificiaryStr", y);
    data.append("Productstr",p);
    data.append("ProductID",d);
    
  //   return  this.httpClient.get(environment.apiURL+"SaveProductMappingInfo?paramsd="+params)
  return  this.httpClient.post(environment.apiURL+"SaveProductMappingInfo",data)
 
}
   GetProductFieldInfo(){
    return  this.httpClient.post(environment.apiURL+"FetchProductFieldInfo",null)
   }

   
   GetBenificiaryFieldInfo(){
    return  this.httpClient.post(environment.apiURL+"FetchBenificiaryFieldInfo",null)
   }

   GetproductFieldInfoData(param:any){
    return  this.httpClient.get(environment.apiURL+"GetproductFieldInfoData?param="+param);
  
  }
  GetBenificiaryFieldInfoData(param:any){
    return  this.httpClient.get(environment.apiURL+"GetBenificiaryFieldInfoData?param="+param);
  }
  /*Product Map End */
}

