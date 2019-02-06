import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndLibsComponent } from './dnd-libs.component';

describe('DndLibsComponent', () => {
  let component: DndLibsComponent;
  let fixture: ComponentFixture<DndLibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndLibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
