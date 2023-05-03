import { TestBed } from '@angular/core/testing';

import { ListToolsService } from './list-tools.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListToolsService', () => {
  let service: ListToolsService;

  beforeEach( () => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(ListToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
