import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RepoPreviewComponent } from './repo-preview.component';
import { REPOSITORIES } from '../mock-data';
import { RouterTestingModule } from '@angular/router/testing';
import { testRoutes } from '../test-helpers';

describe('RepoPreviewComponent', () => {
  let component: RepoPreviewComponent;
  let fixture: ComponentFixture<RepoPreviewComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoPreviewComponent ],
      imports: [ 
        RouterTestingModule.withRoutes(testRoutes)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoPreviewComponent);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    component.repo = REPOSITORIES[0];
    fixture.detectChanges();
  });

  it('should create the RepoPreview component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a repo as input and display its name', () => {
    const repoName = fixture.nativeElement.querySelector('.repo-name');

    expect(repoName.textContent).toContain('zagaku');
  });

  it('should display the description of the repo received as input', () => {
    const repoDescription = fixture.nativeElement.querySelector('.repo-description');

    expect(repoDescription.textContent).toContain('Learning whilst seated');
  });

  it('should display the description as "not available" if it is not given', () => {
    const repoWithNoDescription = REPOSITORIES[5];
    component.repo = repoWithNoDescription;
    fixture.detectChanges();

    const emptyRepoDescription = fixture.nativeElement.querySelector('.repo-description');

    expect(emptyRepoDescription.textContent).toContain('not available');
  });

  it('each tile provides a link to the appropriate route for that repository detail page', () => {
    const link = fixture.nativeElement.querySelector('a').getAttribute('href');

    expect(link).toEqual('/detail/zagaku');
  });

  it('clicking a preview tile navigates to the appropriate repository detail page', () => {
    const link = fixture.nativeElement.querySelector('a');

    link.click();

    expect(location.path()).toEqual('/detail/zagaku');
  });
});
