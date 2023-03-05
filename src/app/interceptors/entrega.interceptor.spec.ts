import { TestBed } from '@angular/core/testing';

import { EntregaInterceptor } from './entrega.interceptor';

describe('EntregaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EntregaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EntregaInterceptor = TestBed.inject(EntregaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
