import { Component, OnInit,Renderer2 ,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

//import { AgGridAngular} from "ag-grid-angular"
@Component({
  selector: 'app-fieldmaster',
  templateUrl: './fieldmaster.component.html',
  styleUrls: ['./fieldmaster.component.css']
})
export class FieldmasterComponent implements OnInit {
  form!: FormGroup;submitted = false;
  dataSource:any;
  //public gridOptions!: AgGridAngular;
  constructor(private webApiService:DataserviceService,private fb: FormBuilder,private Router:Router,private renderer:Renderer2) {
   
  }
  
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
displayedColumns:string[]=['FieldID','FieldName','type','Description','CreatedBy','CreatedDate'];
//displayedColumns:string[]=['FieldID','FieldName'];
   
  ngOnInit(): void {
    this.LoadFieldMaster();
    this.form = this.fb.group({

      txtFieldName: [''],
      txtType: [''],
      txtDescription: ['']
    });
   
  }
  SaveFieldMaster(){
   
    debugger;
    let strtxtFieldName=this.form.value.txtFieldName;
    let strtxtType=this.form.value.txtType;
    let strtxtDescription=this.form.value.txtDescription;
    let strCreatedBy="Dharmendra";
     //;document.getElementById("txtFieldName")?
     this.insertFieldMaster(strtxtFieldName,strtxtType,strtxtDescription,strCreatedBy);
  }
  insertFieldMaster(strtxtFieldName:any,strtxtType:any,strtxtDescription:any,strCreatedBy:any){
    this.webApiService.InsertFieldMaster(strtxtFieldName,strtxtType,strtxtDescription,strCreatedBy).subscribe((result:any) =>{
      debugger;
    alert(result[0].Msg);
    this.LoadFieldMaster();
    });;
   

    
  }
 

  LoadFieldMaster(){
    this.webApiService.LoadFieldMaster().subscribe((result:any) =>{
      debugger;
      this.dataSource=result;
      console.log(this.dataSource);
    });;
   

    
  }

}
