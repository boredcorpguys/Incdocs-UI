import { TestBed, inject } from '@angular/core/testing';

import { AdminUserActionsService } from './admin-user-actions.service';

describe('AdminUserActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUserActionsService]
    });
  });

  it('should be created', inject([AdminUserActionsService], (service: AdminUserActionsService) => {
    expect(service).toBeTruthy();
  }));
});
