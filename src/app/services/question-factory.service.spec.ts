import { TestBed } from '@angular/core/testing';

import { QuestionFactoryService } from './question-factory.service';

describe('QuestionFactoryService', () => {
  let service: QuestionFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
