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
    expect(fixture.nativeElement.querySelector('.repo-name').textContent).toContain('zagaku');
  });

  it('should display the description of the repo received as input', () => {
    expect(fixture.nativeElement.querySelector('.repo-description').textContent).toContain('Learning whilst seated');
  });
});
