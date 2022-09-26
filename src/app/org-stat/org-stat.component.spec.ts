import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { OrgStatComponent } from './org-stat.component';
import { ORG_STATS } from '../mock-data';
import { RepoService } from '../repo.service';
import { RepoServiceStub } from '../test-helpers';

describe('OrgStatComponent', () => {
  let component: OrgStatComponent;
  let fixture: ComponentFixture<OrgStatComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgStatComponent ],
      providers: [
        {
          provide: RepoService,
          useValue: new RepoServiceStub()
        },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgStatComponent);
    component = fixture.componentInstance;
    component.stat = ORG_STATS[0];
    component.viewer = 'Test Stat';
    fixture.detectChanges();
    
    compiled = fixture.nativeElement;
  });

  it('should create the OrgStatComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should receive repo as input and display its name', () => {
    const firstOrganizationStat = compiled.querySelector('#stat');

    expect(firstOrganizationStat?.textContent).toContain('best project');
  });

  it('should receive as input and display stat data', () => {
    const firstOrganizationStat = compiled.querySelector('#stat');

    expect(firstOrganizationStat?.textContent).toContain('Test Stat');
  });
});
