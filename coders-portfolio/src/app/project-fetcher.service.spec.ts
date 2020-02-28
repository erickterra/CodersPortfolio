import { TestBed } from '@angular/core/testing';

import { ProjectFetcherService } from './project-fetcher.service';

describe('ProjectFetcherService', () => {
  let service: ProjectFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
