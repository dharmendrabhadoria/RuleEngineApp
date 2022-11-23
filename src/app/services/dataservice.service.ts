import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

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
}
