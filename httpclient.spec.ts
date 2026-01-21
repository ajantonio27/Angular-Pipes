import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpclientService } from './httpclient';

describe('HttpclientService', () => {
  let service: HttpclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(HttpclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});