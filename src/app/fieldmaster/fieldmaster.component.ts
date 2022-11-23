
import { Component, OnInit,Renderer2 ,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-fieldmaster',
  templateUrl: './fieldmaster.component.html',
  styleUrls: ['./fieldmaster.component.css']
})
export class FieldmasterComponent implements OnInit {
  form!: FormGroup;submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  SaveFieldMaster(){
   
    debugger;
    //;document.getElementById("txtFieldName")?
  }
}
