import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements OnInit {
  files: any;
  fileName: string;
  inputReference: any;
  constructor() { }

  onChange(inputReference: any) {
    // should be an array
    this.inputReference = inputReference;
    this.files = inputReference.files;
    this.fileName = this.files[0].name;
  }

  clear(){
    this. files = null;
    this.fileName = '';
    this.inputReference.value  = '';
  }

  ngOnInit() {
  }

}
