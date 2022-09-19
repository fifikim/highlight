import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { RepoService } from '../repo.service';
import { repoServiceStub } from '../test-helpers';
import { REPOSITORIES } from '../mock-data';
import { FormsModule } from '@angular/forms';
import { RepoPreviewComponent } from '../repo-preview/repo-preview.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let repoService: RepoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        SearchComponent,
        RepoPreviewComponent
      ],
      imports: [ 
        FormsModule, 
        RouterTestingModule
      ],
      providers: [
        {
          provide: RepoService,
          useValue: repoServiceStub
        }
      ]
    })
    .compileComponents();

    repoService = TestBed.inject(RepoService);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Search page component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the search bar', () => {
    const searchBar = fixture.nativeElement.querySelector('input');

    expect(searchBar).toBeTruthy();
  });

  it('should bind the user input to the search term', () => {
    const searchTerm = 'testing';
    const searchBar = fixture.nativeElement.querySelector('input');

    searchBar.value = searchTerm;
    searchBar.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.term).toEqual(searchTerm);
  });

  it('search should return matching repositories from the repository service', () => {
    const searchTerm = 'testing';
    const searchBar = fixture.nativeElement.querySelector('input');
    const form = fixture.nativeElement.querySelector('form');
    searchBar.value = searchTerm;

    searchBar.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();

    expect(component.results).toEqual([REPOSITORIES[0]]);
  });

  it('print results should display the number of results on the page', () => {

  });

  it('should render preview tiles for each of the search results returned', () => {

  });
});
