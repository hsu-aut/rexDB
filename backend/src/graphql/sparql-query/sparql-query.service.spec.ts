import { Test, TestingModule } from '@nestjs/testing';
import { SparqlQueryService } from './sparql-query.service';

describe('SparqlQueryService', () => {
  let service: SparqlQueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SparqlQueryService],
    }).compile();

    service = module.get<SparqlQueryService>(SparqlQueryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
