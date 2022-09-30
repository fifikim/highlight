import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { RepoStatComponent } from '../repo-stat/repo-stat.component';
import { StatService } from '../stat.service';
import { statServiceMock, mapperServiceMock } from '../test-helpers';
import { MOST_WATCHED_MAPPED } from '../mock-data';
import { MapperService } from '../mapper.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let statService: StatService;
  let mapperService: MapperService;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        RepoStatComponent 
      ],
      providers: [
        {
          provide: StatService,
          useValue: statServiceMock
        },
        {
          provide: MapperService,
          useValue: mapperServiceMock
        }
      ],
      imports: [ 
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    statService = TestBed.inject(StatService);
    mapperService = TestBed.inject(MapperService);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.nativeElement;
  });

  it('should create the Dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a list of 3 most watched repositories from StatService', () => {
    expect(statService.getMostWatched).toHaveBeenCalled();
  });

  it('should receive a list of mapped repositories from MapperService', () => {
    expect(mapperService.mapMostWatched).toHaveBeenCalled();
    expect(component.repos).toEqual(MOST_WATCHED_MAPPED);
  });

  it('should render the stats for three repositories', () => {
    const allStats = compiled.querySelectorAll('#stat');

    expect(allStats.length).toEqual(3);
  });

  it('should display repositories in descending order of number of watchers', () => {
    const allStats = compiled.querySelectorAll('#stat');
    const firstStat = allStats[0];
    const secondStat = allStats[1];
    const thirdStat = allStats[2];

    expect(firstStat?.textContent).toContain('99');
    expect(secondStat?.textContent).toContain('87');
    expect(thirdStat?.textContent).toContain('8');
  })

  it('should render the name and watchers count of the repository referenced in a stat', () => {
    const firstStat = compiled.querySelector('#stat');
    const firstStatRepoName = 'hyperion'
    const firstStatWatchers = 99;

    expect(firstStat?.textContent).toContain(`${firstStatRepoName} ${firstStatWatchers}`);
  });

  it('should render the timestamp', () => {
    const timestamp = compiled.querySelector('.timestamp');

    expect(timestamp).toBeTruthy();
  });

  // it('should reload the corresponding child element when a repo value changes', () => {
  //
  // });

  // it('should reload the timestamp when a repo value changes', () => {
  //
  // });
});
