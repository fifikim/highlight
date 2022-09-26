import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { BrowseComponent } from './browse.component';
import { RepoPreviewComponent } from '../repo-preview/repo-preview.component';
import { RepoService } from '../repo.service';
import { MapperService } from '../mapper.service';
import { RepoServiceStub, MapperServiceStub, testRoutes } from '../test-helpers';
import { REPOSITORIES } from '../mock-data';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;
  let compiled: HTMLElement;
  let repoService: RepoService;
  let mapperService: MapperService;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        BrowseComponent,
        RepoPreviewComponent 
      ],
      providers: [
        {
          provide: RepoService,
          useValue: new RepoServiceStub()
        },
        {
          provide: MapperService,
          useValue: new MapperServiceStub()
        },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      imports: [ 
        RouterTestingModule.withRoutes(testRoutes)
      ]
    })
    .compileComponents();

    repoService = TestBed.inject(RepoService);
    mapperService = TestBed.inject(MapperService);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the Browse component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a list of repositories from RepoService', () => {
    expect(component.repos).toEqual(REPOSITORIES);
  });

  it('should render a RepoPreviewComponent for every repo received from RepoService', () => {
    const repos = compiled.querySelectorAll('.repo-preview');

    expect(repos.length).toEqual(REPOSITORIES.length);
  });

  it('each preview tile should link to the detail page for that repository', () => {
    const link = compiled.querySelector('a');

    link?.click();

    expect(location.path()).toEqual('/detail/zagaku');
  });

  it('should render the name of the repository in the RepoPreviewComponent', () => {
    const firstRepoPreview = compiled.querySelector('.repo-preview');
    const firstRepoName = REPOSITORIES[0].name;

    expect(firstRepoPreview?.textContent).toContain(firstRepoName);
  });

  it('should render the description of the repository in the RepoPreviewComponent', () => {
    const firstRepoPreview = compiled.querySelector('.repo-preview');
    const firstRepoDescription = REPOSITORIES[0].description;

    expect(firstRepoPreview?.textContent).toContain(firstRepoDescription);
  });

  it('should render a dropdown menu with all available sort options', () => {
    const sortByMenu = compiled.querySelector('select');
    const renderedOptions = compiled.querySelectorAll('option');

    expect(sortByMenu).toBeTruthy();
    expect(renderedOptions.length).toBe(4);
  });
});
