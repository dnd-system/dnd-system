import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndMaterialComponent } from './dnd-material.component';

describe('DndMaterialComponent', () => {
  let component: DndMaterialComponent;
  let fixture: ComponentFixture<DndMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
