import { Component, OnInit,Renderer2 ,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-benificiarymaster',
  templateUrl: './benificiarymaster.component.html',
  styleUrls: ['./benificiarymaster.component.css']
})
export class BenificiarymasterComponent implements OnInit {

  form!: FormGroup;submitted = false;
  dataSource:any;
  displayedColumns:string[]=['BenificiaryID','BenificiaryName','FieldType','FieldPurpose','FormulaToDriveData','CreatedBy','CreatedDate'];
  //public gridOptions!: AgGridAngular;
  constructor(private webApiService:DataserviceService,private fb: FormBuilder,private Router:Router,private renderer:Renderer2) {
   
  }
  SaveBenificiaryFieldMaster(){
    debugger;
    let strtxtBenificiaryFieldName=this.form.value.txtBenificiaryFieldName;
    let strtxtBenificiaryType=this.form.value.txtBenificiaryType;
    let strtxtBenificiaryFieldPurpose=this.form.value.txtBenificiaryFieldPurpose;
    let strtxtBenificiaryFieldFormula=this.form.value.txtBenificiaryFieldFormula;
    let strCreatedBy="Dharmendra";
     //;document.getElementById("txtFieldName")?
     this.insertBenificiaryFieldMaster(strtxtBenificiaryFieldName,strtxtBenificiaryType,strtxtBenificiaryFieldPurpose,strtxtBenificiaryFieldFormula,strCreatedBy);
  }
  insertBenificiaryFieldMaster(strtxtBenificiaryFieldName:any,strtxtBenificiaryType:any,
    strtxtBenificiaryFieldPurpose:any,strtxtBenificiaryFieldFormula:any,strCreatedBy:any){
      
    this.webApiService.insertBenificiaryFieldMaster(strtxtBenificiaryFieldName,strtxtBenificiaryType,strtxtBenificiaryFieldPurpose,strtxtBenificiaryFieldFormula,strCreatedBy).subscribe((result:any) =>{
      debugger;
    alert(result[0].Msg);
    });;

  }

  
  LoadBenificiaryMaster(){
    this.webApiService.LoadBenificiaryMaster().subscribe((result:any) =>{
      debugger;
      this.dataSource=result;
      console.log(this.dataSource);
    });;
   

    
  }

  ngOnInit(): void {
    this.form = this.fb.group({

      txtBenificiaryFieldName: [''],
      txtBenificiaryType: [''],
      txtBenificiaryFieldPurpose: [''],
      txtBenificiaryFieldFormula:['']
    });
   this.LoadBenificiaryMaster();
  }

}
