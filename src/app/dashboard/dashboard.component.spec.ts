import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { OrgStatComponent } from '../org-stat/org-stat.component';
import { RepoService } from '../repo.service';
import { StatService } from '../stat.service';
import { orgStatServiceStub, repoServiceStub } from '../test-helpers';
import { REPOSITORIES, ORG_STATS } from '../mock-data';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        OrgStatComponent 
      ],
      providers: [
        {
          provide: StatService,
          useValue: orgStatServiceStub
        },
        {
          provide: RepoService,
          useValue: repoServiceStub
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a list of organization stats from StatService', () => {
    expect(component.stats).toEqual(ORG_STATS);
  });

  it('should receive a list of repositories from RepoService', () => {
    expect(component.repos).toEqual(REPOSITORIES);
  });

  it('should render an OrgStatComponent for every organization stat received from StatService', () => {
    const stats = fixture.debugElement.nativeElement.querySelectorAll('.stats');

    expect(stats.length).toEqual(6);
  });

  it('should render the name of the repository referenced in a stat', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;

    expect(compiled.querySelector('.stats')?.textContent).toContain(REPOSITORIES[0].name);
  });

  it('should render the stat data', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;

    expect(compiled.querySelector('.stats')?.textContent).toContain(ORG_STATS[0]);
  });

  it('should render the timestamp', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;

    expect(compiled.querySelector('.timestamp')).toBeTruthy();
  });
});
