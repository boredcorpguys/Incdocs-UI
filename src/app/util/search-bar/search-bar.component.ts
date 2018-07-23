import { Component, OnInit, Input } from '@angular/core';
import { SearchBarConfig } from './models/search-bar-config';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { SearchBarService } from './services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  config: SearchBarConfig;
  searchCtrl: FormControl;
  filteredOptions: Observable<any[]>;
  options: Array<any> = new Array();

  constructor(private service: SearchBarService) {
    this.searchCtrl = new FormControl();
    this.filteredOptions = this.searchCtrl!.valueChanges
      .pipe(
        startWith(''),
        debounceTime(200),
        distinctUntilChanged(),
        map((value: string) => this.getOptions(value))
      );
  }

  getOptions(val: string) {
    // if val is null or underfined or if it's length is less than the configured minQueryLength, just do nothing.
    if (!val || (val.length < this.config.minQueryLength)) {
      return this.options;
    } else if (val.length == this.config.minQueryLength) {
      //make the service call and assign it directly
      let _options = this.service.searchBasedOnParameter(this.config.urlForSearch, val);
      this.options = _options;
      return this.options;
    }
    //just return all the options that contain val in it
    //this would be a subset of options retrieved from the service call
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(val.toLowerCase()) != -1);
  }

  ngOnInit() {
  }

}
