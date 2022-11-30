
import { Component, OnInit,Renderer2 ,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  form!: FormGroup;submitted = false;
  fields:any;
  Operations:any;  
  Operators:any=[];
  expression:any;
  TableColumnsName:any;
  TableData:any=[];
  items:any;
  arrBirds:any= [];
  // constructor(private webApiService:DataserviceService,private fb: FormBuilder,private Router:Router,private renderer:Renderer2
  //   , public dialogRef: MatDialogRef<EditorComponent>) {
   
  // }
  constructor( private webApiService:DataserviceService,private fb: FormBuilder,private Router:Router,private renderer:Renderer2
    , public dialogRef: MatDialogRef<EditorComponent>) {
   
  }
  
  
  // fields:any= [
  //   { 'ID': '1' ,'Name': 'RCD'},
  //   { 'ID': '2' ,'Name': 'PTD'},
  //   { 'ID': '3' ,'Name': 'SA'},
  //   { 'ID': '4' ,'Name': 'PPT'},
  //   { 'ID': '5' ,'Name': 'Term'},
  //   { 'ID': '5' ,'Name': 'Surrender/Death Date'},
  // ]
  //fields:any= [];
  links = [
    'Google',
    'Linkedin',
    'Twitter'
  ]
  // Operators =[
  //   '+','-','*','/','%','>=','<=','==','===','!=' ,'>','<'
  // ]

  // Operations=[
  //   'Functions','Logical','Fields'
  // ]


  

  ngOnInit(): void {
    debugger;
   
    this.GetOperatorString();
    this.GetOperationName("");

    this.form = this.fb.group({

      expression: []
    });
    this.items = []
      
  }

  modelChangeFn(value:any) {
    debugger;
    this.expression = value;
  }

  onInput(inputhtml:any,event:any): void {
    debugger;

    const start = inputhtml.selectionStart
    const end = inputhtml.selectionEnd;
    const text = inputhtml.value
    const before = text.substring(0, start)
    const after  = text.substring(end, text.length)
    inputhtml.value = (before + event + after)
    inputhtml.selectionStart = inputhtml.selectionEnd = start + event.length
    inputhtml.focus()
    localStorage.setItem("expressionvalue",inputhtml.value);


// if(this.expression==""){
//   this.expression=event;
// }
//     else{
//       var cursorPos = inputhtml.selectionStart;//$('#text').prop('selectionStart');
//     var v =inputhtml.value;// $('#text').val();
//     var textBefore = v.substring(0,  cursorPos);
//     var textAfter  = v.substring(cursorPos, v.length);
//     if(cursorPos==0){
//       this.expression=event + textAfter;
//     }
// else{
//   this.expression=textBefore + v + textAfter;
// }
   
//     }
    //get the actual position of the cursor
    //let pos=inputhtml.selectionStart;

   // let eos=inputhtml.selectionEnd;
    
   // let textplacepos =this.expression.substring(0, pos);
   //let Actualtextpos= this.expression.substring(eos, this.expression.length);
    // let vv= this.expression.substring(0, pos)
    //         + event
    //         + this.expression.substring(eos, this.expression.length);
    //         this.expression =vv;

    //get the characteres not digit before change:
   

  }

  GetBonusTableInfo(TableName:any){
    
    this.webApiService.GetBonusTableInfo(TableName).subscribe((result:any) =>{
      debugger;
     
    

    this.TableColumnsName=result.Table;
  this.TableData=result.Table1;
this.items=result.Table1;
  
   
    });
  }
  doubleClick(myinput:any,event:any){
    debugger;
    
    
if(event=="PNB_GsvMonthlyDisFactor"|| event=="PNB_GSVrates" || event=="PNB_Reversionaryrates"||
event=="PNB_SSVMonthlyFactor" || event=="PNB_Terminalrates"){
  document.getElementById('myModal')?.setAttribute("style","display:block")
this.GetBonusTableInfo(event);
}
    
    else{
    
    
    
   //this.expression = this.expression + event;

   this.onInput(myinput,event);
    }
   //this.onInput(num1,this.expression)
  }

  OpClick(myinput:any,event:any){
    //this.expression = this.expression + data;
   // this.expression = this.expression + event;
    this.onInput(myinput,event);
    
  }
  onclose(){
 debugger;
 let gg=localStorage.getItem("expressionvalue");
 
  //let uu1=this.form.value.expression;
      //sessionStorage.setItem("expression",this.expression);
     
   
  }
  LoadProductField(ProductID:any){
    this.webApiService.LoadProductField(ProductID).subscribe((result:any) =>{
      debugger;
      this.fields=result;
   
    });
  }


  GetOperationName(OperationType:any){
    this.webApiService.GetOperationName(OperationType).subscribe((result:any) =>{
      debugger;
      this.Operations=result;
   
    });
  }
  GetOperatorString(){
    this.webApiService.GetOperatorString().subscribe((result:any) =>{
      debugger;
      this.Operators=result;
   
    });
  }

  GetOperationFunctionName(OperationType:any){
    this.webApiService.GetOperationName(OperationType).subscribe((result:any) =>{
      debugger;
      this.fields=result;
   
    });
  }
  OprClick(data:any){
    debugger;
    if(data =='Fields'){
    let ProductID=  sessionStorage.getItem("ProductID");
      //  this.fields =[];
      //  this.fields.push(
      //   { 'ID': '1' ,'Name': 'RCD'},
      //   { 'ID': '2' ,'Name': 'PTD'},
      //   { 'ID': '3' ,'Name': 'SA'},
      //   { 'ID': '4' ,'Name': 'PPT'},
      //   { 'ID': '5' ,'Name': 'Term'},
      //   { 'ID': '5' ,'Name': 'Surrender/Death Date'}
      //  )
      this.LoadProductField(ProductID);
    }else if(data == 'Functions'){
      // this.fields =[];
      // this.fields.push(
      //   {'Name': 'Avg'}, {'Name': 'Count'},
      //   {'Name': 'Min'}, 
      //   {'Name': 'Sum'}, {'Name': 'GetDate'},
      
      //   {'Name': 'GetDayOfYear'}, {'Name': 'DateDiff(M)'},
      //   {'Name': 'DateDiff(Y)'}, {'Name': 'DateDiff(D)'},
      // )

      this.GetOperationFunctionName("Functions");
    }else if(data == 'Logical'){
      // this.fields =[];
      // this.fields.push(
      //   {'Name': 'Iif'}, {'Name': 'IsNull'},
      //   {'Name': 'IsNullOrEmpty'}
      // )
      this.GetOperationFunctionName("Logical");
    }
    else if(data=='Bonus'){
      this.GetOperationFunctionName("Bonus");
    }
    else{
      this.fields =[];
    }
  }
  SaveFormula(){
    debugger;
    let ProductID=  sessionStorage.getItem("ProductID");
        let FieldID=  sessionStorage.getItem("FieldID");
    let GetFormulaExpression=localStorage.getItem("expressionvalue");
    localStorage.setItem("TabIndex","1");
    let dd={
      ProductID:ProductID,
      FieldID:FieldID,
      Formula:GetFormulaExpression,
      CreatedBy:"dds"
    }

  /*  close  model popup   */
 if(GetFormulaExpression!=""){

  this.webApiService.Pnb_benifit_formula(dd).subscribe((result:any) =>{
    debugger;
    alert(result[0].Msg);
    this.dialogRef.close();
 
  });
  

   
 }
 else{
  alert("Please create formula")
 }

  /*End this line */
  }
  Close(){
    document.getElementById('myModal')?.setAttribute("style","display:none")
  }
  openDialog(){
    document.getElementById('myModal')?.setAttribute("style","display:block")
  }
}
