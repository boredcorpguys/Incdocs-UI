import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-rm',
  templateUrl: './new-rm.component.html',
  styleUrls: ['./new-rm.component.css']
})
export class NewRmComponent implements OnInit {
  matTooltipPosition:string;
  constructor() {
    this.matTooltipPosition = 'right';
   }

  ngOnInit() {
  }

}
