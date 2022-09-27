import { TestBed } from '@angular/core/testing';
import { RepoService } from './repo.service';
import { REPOSITORIES } from './mock-data';
import { Repository } from './repository';

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

  it('#getRepo should return a single repository whose name matches the query parameter', 
  (done) => {
    const expectedData: Repository = REPOSITORIES[0];

    service.getRepo("zagaku").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('#getRepo should return null when no repository name matches the query parameter', 
  (done) => {
    service.getRepo("test").subscribe(data => {
      expect(data).toBeFalsy();
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

  it('#searchRepos should return a list of repositories whose name partially matches the search term', 
  (done) => {
    const expectedData: Repository[] = [REPOSITORIES[1]];

    service.searchRepos("magis").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('#searchRepos should return an empty list when no repositories match the search term', 
  (done) => {
    const expectedData: Repository[] = [];

    service.searchRepos("test test").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });
});
