import { TestBed } from '@angular/core/testing';
import { MapperService } from './mapper.service';
import { 
  REPOSITORIES, 
  REPO1_SERVICE_DATA, 
  REPO1_MAPPED_DETAIL, 
  REPO1_MAPPED_PREVIEW,
  REPO2_SERVICE_DATA, 
  REPO2_MAPPED_DETAIL, 
  REPO2_MAPPED_PREVIEW,
  MOST_WATCHED_SERVICE_DATA
} from './mock-data';

describe('MapperService', () => {
  let service: MapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#mapRepo should map the full details of a single repository', () => {
    const actualMapped = service.mapRepo(REPO1_SERVICE_DATA);
    
    expect(actualMapped).toEqual(REPO1_MAPPED_DETAIL);
  });

  it('#mapRepo should map a single repository when only the required details are given', () => {
    const actualMapped = service.mapRepo(REPOSITORIES[0]);
    
    expect(actualMapped).toEqual(REPO1_MAPPED_PREVIEW);
  });

  it('#mapRepos should map the full details of multiple repositories', () => {
    const actualMapped = service.mapRepos([REPO1_SERVICE_DATA, REPO2_SERVICE_DATA]);

    expect(actualMapped).toEqual([REPO1_MAPPED_DETAIL, REPO2_MAPPED_DETAIL]);
  });

  it('#mapRepos should map multiple repositories when only the required details are given', () => {
    const actualMapped = service.mapRepos([REPOSITORIES[0], REPOSITORIES[1]]);
    
    expect(actualMapped).toEqual([REPO1_MAPPED_PREVIEW, REPO2_MAPPED_PREVIEW]);
  });

  it('#mapMostWatched should map repositories and sort them by most watchers', () => {
    const mappedArray = service.mapMostWatched(MOST_WATCHED_SERVICE_DATA);
    const first = mappedArray[0].watchers;
    const second = mappedArray[1].watchers;
    const third = mappedArray[2].watchers;

    expect(first).toBeGreaterThan(second);
    expect(second).toBeGreaterThan(third);
  });
});
