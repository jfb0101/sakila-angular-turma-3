import { TestBed } from '@angular/core/testing';

import { FilmService } from './film-service.service';

describe('FilmServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmService = TestBed.get(FilmService);
    expect(service).toBeTruthy();
  });
});
