import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndMatAutocompleteGeneratorComponent } from './dnd-mat-autocomplete-generator.component';

describe('DndMatAutocompleteGeneratorComponent', () => {
  let component: DndMatAutocompleteGeneratorComponent;
  let fixture: ComponentFixture<DndMatAutocompleteGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndMatAutocompleteGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndMatAutocompleteGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
