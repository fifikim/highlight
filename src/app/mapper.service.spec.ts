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

  // it('#mapRepo should map a single repository when only the required details are given', () => {
  //   const actualMapped = service.mapRepo(REPOSITORIES[0]);
    
  //   expect(actualMapped).toEqual(MAPPED_PREVIEW_REPO1);
  // });

  // it('#mapRepos should map the full details of multiple repositories', () => {
  //   const actualMapped = service.mapRepos([REPO_DATA1, REPO_DATA2]);

  //   expect(actualMapped).toEqual([MAPPED_REPO1, MAPPED_REPO2]);
  // });

  // it('#mapRepos should map multiple repositories when only the required details are given', () => {
  //   const actualMapped = service.mapRepos([REPOSITORIES[0], REPOSITORIES[1]]);
    
  //   expect(actualMapped).toEqual([MAPPED_PREVIEW_REPO1, MAPPED_PREVIEW_REPO2]);
  // });
});
