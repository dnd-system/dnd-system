import { NgModule } from '@angular/core';
import { DndLibsComponent } from './dnd-libs.component';
import { DndMaterialModule } from './dnd-material/dnd-material.module';

@NgModule({
  declarations: [DndLibsComponent],
  imports: [
    DndMaterialModule
  ],
  exports: [DndLibsComponent]
})
export class DndLibsModule { }
