import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowseComponent } from '../browse/browse.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RepoStatComponent } from '../repo-stat/repo-stat.component';
import { RepoPreviewComponent } from '../repo-preview/repo-preview.component';
import { HomeComponent } from './home.component';
import { RepoService } from '../repo.service';
import { StatService } from '../stat.service';
import { repoServiceMock, statServiceMock, mapperServiceMock } from '../test-helpers';
import { MapperService } from '../mapper.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let repoService: RepoService;
  let mapperService: MapperService;
  let statService: StatService;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        DashboardComponent,
        BrowseComponent,
        RepoPreviewComponent,
        RepoStatComponent
      ], 
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: RepoService,
          useValue: repoServiceMock
        },
        {
          provide: StatService,
          useValue: statServiceMock
        },
        {
          provide: MapperService,
          useValue: mapperServiceMock
        },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    repoService = TestBed.inject(RepoService);
    statService = TestBed.inject(StatService);
    mapperService = TestBed.inject(MapperService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the homepage component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the dashboard', () => {
    const dashboard = compiled.querySelector('.dashboard');

    expect(dashboard).toBeTruthy();
  });

  it('should render organization stats in the dashboard', () => {
    const mostWatched = compiled.querySelector('.stats');

    expect(mostWatched).toBeTruthy();
  });

  it('should render the browse all section', () => {
    const browseAll = compiled.querySelector('.browse-all');

    expect(browseAll).toBeTruthy();
  });

  it('should render repository previews in the browse all section', () => {
    const firstRepoName = compiled.querySelector('.repo-name');

    expect(firstRepoName).toBeTruthy();
  });
});
