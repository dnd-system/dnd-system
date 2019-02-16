import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

export interface OptionName {
  name: string;
  value: string;
}

@Component({
  selector: 'lib-dnd-mat-autocomplete-generator',
  templateUrl: './dnd-mat-autocomplete-generator.component.html',
  styleUrls: ['./dnd-mat-autocomplete-generator.component.css']
})
export class DndMatAutocompleteGeneratorComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('optionsArray') optionsArray: any;
  // tslint:disable-next-line:no-input-rename
  @Input('placeholder') placeholder: string;
  // tslint:disable-next-line:no-input-rename
  @Input('consoleLog') consoleLog: boolean;
  @Output() returnedValue = new EventEmitter<string>();

  myControl = new FormControl();
  options: OptionName[] = [];
  filteredOptions: Observable<OptionName[]>;
  option: any;
  groups = new Array;

  constructor(
  ) {
    if (!this.consoleLog) { this.consoleLog = false; }
    if (!this.placeholder) { this.placeholder = 'Autocomplete Placeholder'; }
  }


  // tslint:disable-next-line:no-shadowed-variable
  displayFn(OptionName?: OptionName): string | undefined {
    return OptionName ? OptionName.name : undefined;
  }

  private _filter(name: string): OptionName[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  console_log(variable: any) {
    if (this.consoleLog === true) {
      console.log(variable);
    }
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.returnedValue.emit(event.option.value);
    this.console_log(event.option.value);
  }

  ngOnInit() {
    if (this.optionsArray === undefined) {
      // tslint:disable-next-line:max-line-length
      throw new Error('Wrong data in \'optionsArray\' variable in \'<lib-dnd-mat-autocomplete-generator [optionsArray]=\'...\'></lib-dnd-mat-autocomplete-generator>\'.');
    }
    // filtrowanie:
    this.options = this.optionsArray;
    this.console_log(this.options);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | OptionName>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

}

