import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

export interface OptionName {
  name: string;
  id: string;
}



@Component({
  selector: 'lib-dnd-mat-autocomplete-generator',
  templateUrl: './dnd-mat-autocomplete-generator.component.html',
  styleUrls: ['./dnd-mat-autocomplete-generator.component.css']
})
export class DndMatAutocompleteGeneratorComponent implements OnInit {
  @Input('clientsListToOptions') new_options: any;
  @Output() returnedValue = new EventEmitter<string>();

  myControl = new FormControl();
  options: OptionName[] = [];
  filteredOptions: Observable<OptionName[]>;
  option: any;
  groups = new Array;

  constructor(
  ) {}


  displayFn(OptionName?: OptionName): string | undefined {
    return OptionName ? OptionName.name : undefined;
  }

  private _filter(name: string): OptionName[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.returnedValue.emit(event.option.value);
    console.log(event.option.value);
  }

  ngOnInit() {

    // filtrowanie:
    console.log(this.new_options)
    this.options = this.new_options;
    console.log(this.options);
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith<string | OptionName>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
    }

}

