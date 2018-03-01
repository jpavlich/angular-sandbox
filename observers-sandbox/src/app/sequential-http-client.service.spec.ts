import { TestBed, inject } from '@angular/core/testing';

import { SequentialHttpClientService } from './sequential-http-client.service';

describe('SequentialHttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SequentialHttpClientService]
    });
  });

  it('should be created', inject([SequentialHttpClientService], (service: SequentialHttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
