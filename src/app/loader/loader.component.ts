import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ANIMATION_TYPES } from 'ngx-loading';
@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})


export class LoaderComponent implements OnInit {

  @Input()
  loading: boolean;
  loaderConfig: any;
  constructor() {
    this.initLoaderConfig();
  }

  initLoaderConfig() {
    this.loaderConfig = {
      backdropBorderRadius: '14px',
      animationType: ANIMATION_TYPES.threeBounce,
      fullScreenBackdrop: true
    };
  }

  ngOnInit() {
  }

}
