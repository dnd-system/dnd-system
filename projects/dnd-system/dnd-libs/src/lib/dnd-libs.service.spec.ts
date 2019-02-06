import { TestBed } from '@angular/core/testing';

import { DndLibsService } from './dnd-libs.service';

describe('DndLibsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DndLibsService = TestBed.get(DndLibsService);
    expect(service).toBeTruthy();
  });
});
