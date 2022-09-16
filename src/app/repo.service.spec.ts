import { TestBed } from '@angular/core/testing';
import { REPOSITORIES } from './mock-data';
import { Repository } from './repository';
import { RepoService } from './repo.service';

describe('RepoService', () => {
  let service: RepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getRepos should return a list of repositories', 
    (done) => {
      const expectedData: Repository[] = REPOSITORIES;

      service.getRepos().subscribe(data => {
        expect(data).toEqual(expectedData);
        done();
      });
  });

  it('#searchRepos should return a list of repositories whose name matches the search term', 
  (done) => {
    const expectedData: Repository[] = [REPOSITORIES[1]];

    service.searchRepos("magistro").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });
});
