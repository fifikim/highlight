import { TestBed } from '@angular/core/testing';
import { ORG_STATS } from './mock-data';
import { StatService } from './stat.service';

describe('StatService', () => {
  let service: StatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getOrgStats should return a list of repositories', 
  (done) => {
    const expectedData: string[] = ORG_STATS;

    service.getOrgStats().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
});
});
