/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('Service: Logger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
  });

  it('should instanciate', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));

  it('calling log() should work', inject([LoggerService], (service: LoggerService) => {
    service.log('hola');
  }));


});
