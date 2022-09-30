import { TestBed } from '@angular/core/testing';
import { RepoService } from './repo.service';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { REPO1_SERVER_DATA, ALL_REPOS_SERVER_DATA } from './mock-data';
import { mockRepoResponse, mockReposResponse } from './test-helpers';

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

  it('#getRepo should return a single repository whose name matches the query parameter', (done) => {
    service.getRepo('zagaku').subscribe(data => {
      expect(data).toEqual(REPO1_SERVER_DATA);
      done();
    });

    controller.expectOne('repo').flush(mockRepoResponse(REPO1_SERVER_DATA));
  });

  it('#getRepo should return null when no repository name matches the query parameter', (done) => {
    service.getRepo('bad_name').subscribe(data => {
      expect(data).toBeNull();
      done();
    });

    controller.expectOne('repo').flush(mockRepoResponse(null));
  });

  it('#getRepos should return a list of repositories', (done) => {
    service.getRepos().subscribe(data => {
      expect(data).toEqual(ALL_REPOS_SERVER_DATA);
      done();
    });

    controller.expectOne('repos').flush(mockReposResponse(ALL_REPOS_SERVER_DATA));
  });
});
