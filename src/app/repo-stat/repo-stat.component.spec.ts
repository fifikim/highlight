import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { RepoStatComponent } from './repo-stat.component';
import { REPOSITORIES } from '../mock-data';
import { testRoutes } from '../test-helpers';

describe('RepoStatComponent', () => {
  let component: RepoStatComponent;
  let fixture: ComponentFixture<RepoStatComponent>;
  let location: Location;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoStatComponent ],
      imports: [ 
        RouterTestingModule.withRoutes(testRoutes)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoStatComponent);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    component = fixture.componentInstance;
    component.repo = REPOSITORIES[0];
    component.index = 0;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the RepoStat component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a repo as input and display its name', () => {
    const repoName = compiled.querySelector('.repo-name');

    expect(repoName?.textContent).toContain('zagaku');
  });

  it('should receive an index as input and display its value plus one', () => {
    const firstRepo = compiled.querySelector('.repo-name');
    const listNumber = '1';

    expect(firstRepo?.textContent).toContain(listNumber);
  });

  it('each tile provides a link to the appropriate route for that repository detail page', () => {
    const link = compiled.querySelector('a')?.getAttribute('href');

    expect(link).toEqual('/detail/zagaku');
  });

  it('clicking a preview tile navigates to the appropriate repository detail page', () => {
    const link = compiled.querySelector('a');

    link?.click();

    expect(location.path()).toEqual('/detail/zagaku');
  });
});
