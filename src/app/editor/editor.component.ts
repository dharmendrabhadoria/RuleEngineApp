import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // fields:any= [
  //   { 'ID': '1' ,'Name': 'RCD'},
  //   { 'ID': '2' ,'Name': 'PTD'},
  //   { 'ID': '3' ,'Name': 'SA'},
  //   { 'ID': '4' ,'Name': 'PPT'},
  //   { 'ID': '5' ,'Name': 'Term'},
  //   { 'ID': '5' ,'Name': 'Surrender/Death Date'},
  // ]
  fields:any= [];
  links = [
    'Google',
    'Linkedin',
    'Twitter'
  ]
  Operators =[
    '+','-','*','/','%','>=','<=','==','===','!=' ,'>','<'
  ]

  Operations=[
    'Functions','Logical','Fields'
  ]
  expression: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  modelChangeFn(value:any) {
    this.expression = value;
  }
  doubleClick(event:any){
    this.expression = this.expression + event;
  }

  OpClick(data:any){
    this.expression = this.expression + data;
  }

  onclose(){
    alert(this.expression)
    sessionStorage.setItem("expression",this.expression);
  }

  OprClick(data:any){
    if(data =='Fields'){
       this.fields =[];
       this.fields.push(
        { 'ID': '1' ,'Name': 'RCD'},
        { 'ID': '2' ,'Name': 'PTD'},
        { 'ID': '3' ,'Name': 'SA'},
        { 'ID': '4' ,'Name': 'PPT'},
        { 'ID': '5' ,'Name': 'Term'},
        { 'ID': '5' ,'Name': 'Surrender/Death Date'}
       )
    }else if(data == 'Functions'){
      this.fields =[];
      this.fields.push(
        {'Name': 'Avg'}, {'Name': 'Count'},
        {'Name': 'Min'}, {'Name': 'Min'},
        {'Name': 'Sum'}, {'Name': 'GetDate'},
        {'Name': 'Sum'}, {'Name': 'GetDate'},
        {'Name': 'GetDayOfYear'}, {'Name': 'DateDiff(M)'},
        {'Name': 'DateDiff(Y)'}, {'Name': 'DateDiff(D)'},
      )
    }else if(data == 'Logical'){
      this.fields =[];
      this.fields.push(
        {'Name': 'Iif'}, {'Name': 'IsNull'},
        {'Name': 'IsNullOrEmpty'}
      )
    }
    else{
      this.fields =[];
    }
  }

}
