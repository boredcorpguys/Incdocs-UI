import { TestBed, inject } from '@angular/core/testing';

import { AdminFetchCurrentUsersService } from './admin-fetch-current-users.service';

describe('AdminFetchCurrentRmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminFetchCurrentUsersService]
    });
  });

  it('should be created', inject([AdminFetchCurrentUsersService], (service: AdminFetchCurrentUsersService) => {
    expect(service).toBeTruthy();
  }));
});
