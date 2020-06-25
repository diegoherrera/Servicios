import { TestBed } from '@angular/core/testing';

import { MyservicioncomponentService } from './myservicioncomponent.service';

describe('MyservicioncomponentService', () => {
  let service: MyservicioncomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyservicioncomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
