import { TestBed, inject } from '@angular/core/testing';
import { ClockService } from './clock.service';

describe('ClockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClockService]
    });
  });

  it('should ...', inject([ClockService], (service: ClockService) => {
    expect(service).toBeTruthy();
  }));
});
