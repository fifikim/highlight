import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoPreviewComponent } from './repo-preview.component';
import { REPOSITORIES } from '../mock-data';

describe('RepoPreviewComponent', () => {
  let component: RepoPreviewComponent;
  let fixture: ComponentFixture<RepoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoPreviewComponent);
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
  })
});
