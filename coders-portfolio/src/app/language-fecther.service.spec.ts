import { TestBed } from '@angular/core/testing';

import { LanguageFectherService } from './language-fecther.service';

describe('LanguageFectherService', () => {
  let service: LanguageFectherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageFectherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
