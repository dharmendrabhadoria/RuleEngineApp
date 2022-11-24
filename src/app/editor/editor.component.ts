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
  doubleClick(myinput:any,event:any){
    debugger;
    
   //this.expression = this.expression + event;

   this.onInput(myinput,event);
   //this.onInput(num1,this.expression)
  }

  OpClick(myinput:any,event:any){
    //this.expression = this.expression + data;
   // this.expression = this.expression + event;
    this.onInput(myinput,event);
    
  }

  onclose(){
    alert(this.expression)
    sessionStorage.setItem("expression",this.expression);
  }

  OprClick(data:any){
    debugger;
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
