import { TestBed } from '@angular/core/testing';

import { ModifyToolsService } from './modify-tools.service';

describe('ModifyToolsService', () => {
  let service: ModifyToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
