import { NgModule } from '@angular/core';
import { DndLibsComponent } from './dnd-libs.component';
import { DndMaterialComponent } from './dnd-material/dnd-material.component';
import { DndMaterialModule } from './dnd-material/dnd-material.module';

@NgModule({
  declarations: [DndLibsComponent, DndMaterialComponent],
  imports: [
    DndMaterialModule
  ],
  exports: [DndLibsComponent]
})
export class DndLibsModule { }
