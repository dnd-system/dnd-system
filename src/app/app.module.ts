import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndMatAutocompleteGeneratorComponent } from 'projects/dnd-system/dnd-libs/src/lib/dnd-material/dnd-mat-autocomplete-generator/dnd-mat-autocomplete-generator.component';
import { DndMaterialModule } from 'projects/dnd-system/dnd-libs/src/lib/dnd-material/dnd-material.module';



@NgModule({
  declarations: [
    AppComponent,
    DndMatAutocompleteGeneratorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DndMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
