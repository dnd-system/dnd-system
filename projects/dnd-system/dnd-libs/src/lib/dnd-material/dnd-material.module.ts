import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './modules/AngularMaterialModules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndMatAutocompleteGeneratorComponent } from './dnd-mat-autocomplete-generator/dnd-mat-autocomplete-generator.component';


@NgModule({
  declarations: [
    DndMatAutocompleteGeneratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    DndMatAutocompleteGeneratorComponent
  ]
})
export class DndMaterialModule { }
