import { TestBed } from '@angular/core/testing';
import { RepoService } from './repo.service';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { Repository } from './repository';
import { REPOSITORIES } from './mock-data';
import { REPO_DATA1, REPO_SEARCH } from './test-helpers';

describe('RepoService', () => {
  let service: RepoService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule]
    });

    controller = TestBed.inject(ApolloTestingController);
    service = TestBed.inject(RepoService);
  });

  afterEach(() => {
    controller.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('#getRepo should return a single repository whose name matches the query parameter', (done) => {
  //   service.getRepo('zagaku').subscribe(data => {
  //     expect(data).toEqual(REPO_DATA1);
  //     done();
  //   });

  //   controller.expectOne('repo').flush(REPO_SEARCH);
  // });

  // it('#getRepo should return null when no repository name matches the query parameter', (done) => {
  //   service.getRepo('bad_name').subscribe(data => {
  //     expect(data).toBeNull();
  //     done();
  //   });

  //   controller.expectOne('repo').flush(REPO_SEARCH);
  // });

  it('#getRepos should return a list of repositories', (done) => {
    const expectedData: Repository[] = REPOSITORIES;

    service.getRepos().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('#searchRepos should return a list of repositories whose name matches the search term', (done) => {
    const expectedData: Repository[] = [REPOSITORIES[1]];

    service.searchRepos("magistro").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('#searchRepos should return a list of repositories whose name partially matches the search term', (done) => {
    const expectedData: Repository[] = [REPOSITORIES[1]];

    service.searchRepos("magis").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('#searchRepos should return an empty list when no repositories match the search term', (done) => {
  const expectedData: Repository[] = [];

    service.searchRepos("test test").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });
});
