import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseComponent } from './browse.component';
import { RepoPreviewComponent } from '../repo-preview/repo-preview.component';
import { RepoService } from '../repo.service';
import { repoServiceStub } from '../test-helpers';
import { REPOSITORIES } from '../mock-data';
import { RouterTestingModule } from '@angular/router/testing';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;
  let repoService: RepoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        BrowseComponent,
        RepoPreviewComponent 
      ],
      providers: [
        {
          provide: RepoService,
          useValue: repoServiceStub
        }
      ],
      imports: [ 
        RouterTestingModule
      ]
    })
    .compileComponents();

    repoService = TestBed.inject(RepoService);
    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Browse component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a list of repositories from RepoService', () => {
    expect(component.repos).toEqual(REPOSITORIES);
  });

  it('should render a RepoPreviewComponent for every repo received from RepoService', () => {
    const repos = fixture.debugElement.nativeElement.querySelectorAll('.repo-preview');

    expect(repos.length).toEqual(9);
  });

  it('should render the name of the repository in the RepoPreviewComponent', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    const firstRepoPreview = compiled.querySelector('.repo-preview');
    const firstRepoName = REPOSITORIES[0].name;

    expect(firstRepoPreview?.textContent).toContain(firstRepoName);
  });

  it('should render the description of the repository in the RepoPreviewComponent', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    const firstRepoPreview = compiled.querySelector('.repo-preview');
    const firstRepoDescription = REPOSITORIES[0].description;

    expect(firstRepoPreview?.textContent).toContain(firstRepoDescription);
  });

  it('should render a dropdown menu with all available sort options', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    const sortByMenu = compiled.querySelector('select');
    const renderedOptions = compiled.querySelectorAll('option');

    expect(sortByMenu).toBeTruthy();
    expect(renderedOptions.length).toBe(4);
  });
});
