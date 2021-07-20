import { TestBed } from '@angular/core/testing';

import { FreeeBookService } from './freee-book.service';

describe('FreeeBookService', () => {
  let service: FreeeBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeeBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
