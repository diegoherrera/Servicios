import { TestBed } from '@angular/core/testing';

import { MyserviciongmoduleService } from './myserviciongmodule.service';

describe('MyserviciongmoduleService', () => {
  let service: MyserviciongmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserviciongmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
