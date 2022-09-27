import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { RepoService } from './repo.service';
import { repoServiceMock } from './test-helpers';
import { REPOSITORIES } from './mock-data';

describe('SearchService', () => {
  let service: SearchService;
  let repoService: RepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RepoService,
          useValue: repoServiceMock
        },
      ]
    });

    service = TestBed.inject(SearchService);
    repoService = TestBed.inject(RepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#searchRepos should return a list of repositories whose name matches the search term', (done) => {
    service.searchRepos("magistro").subscribe(data => {
      expect(data).toEqual([REPOSITORIES[1]]);
      done();
    });
  });

  it('#searchRepos should return a list of repositories whose name partially matches the search term', (done) => {
    service.searchRepos("magi").subscribe(data => {
      expect(data).toEqual([REPOSITORIES[1]]);
      done();
    });
  });

  it('#searchRepos should return an empty list when no repositories match the search term', (done) => {
    service.searchRepos("bad_name").subscribe(data => {
      expect(data).toEqual([]);
      done();
    });
  });
});
