import { TestBed } from '@angular/core/testing';

import { DndSafFirestoreGetService } from './dnd-saf-firestore-get.service';

describe('DndSafFirestoreGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DndSafFirestoreGetService = TestBed.get(DndSafFirestoreGetService);
    expect(service).toBeTruthy();
  });
});
