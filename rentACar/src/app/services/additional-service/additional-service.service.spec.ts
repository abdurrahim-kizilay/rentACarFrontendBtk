/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdditionalServiceService } from './additional-service.service';

describe('Service: AdditionalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdditionalServiceService]
    });
  });

  it('should ...', inject([AdditionalServiceService], (service: AdditionalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
