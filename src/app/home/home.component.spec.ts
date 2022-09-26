import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowseComponent } from '../browse/browse.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OrgStatComponent } from '../org-stat/org-stat.component';
import { RepoPreviewComponent } from '../repo-preview/repo-preview.component';
import { HomeComponent } from './home.component';
import { RepoService } from '../repo.service';
import { RepoServiceStub, MapperServiceStub } from '../test-helpers';
import { MapperService } from '../mapper.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let repoService: RepoService;
  let mapperService: MapperService;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        DashboardComponent,
        BrowseComponent,
        RepoPreviewComponent,
        OrgStatComponent
      ], 
      imports: [
        RouterTestingModule
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
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    repoService = TestBed.inject(RepoService);
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
    const organizationStats = compiled.querySelector('.stats');

    expect(organizationStats).toBeTruthy();
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
