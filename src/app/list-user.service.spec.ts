import { TestBed } from '@angular/core/testing';

import { ListUserService } from './list-user.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListUserService', () => {
  let service: ListUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(ListUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
