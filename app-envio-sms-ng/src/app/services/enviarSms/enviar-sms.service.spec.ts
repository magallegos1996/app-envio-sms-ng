import { TestBed } from '@angular/core/testing';

import { EnviarSmsService } from './enviar-sms.service';

describe('EnviarSmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviarSmsService = TestBed.get(EnviarSmsService);
    expect(service).toBeTruthy();
  });
});
