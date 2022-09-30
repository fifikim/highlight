import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { RepoPreviewComponent } from '../repo-preview/repo-preview.component';
import { RepoService } from '../repo.service';
import { MapperService } from '../mapper.service';
import { RepoServiceStub, MapperServiceStub, testRoutes } from '../test-helpers';
import { REPOSITORIES } from '../mock-data';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let repoService: RepoService;
  let location: Location;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        SearchComponent,
        RepoPreviewComponent
      ],
      imports: [ 
        FormsModule, 
        RouterTestingModule.withRoutes(testRoutes)
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

    repoService = TestBed.inject(RepoService);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  it('should create the Search page component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the search bar', () => {
    const searchBar = compiled.querySelector('input');

    expect(searchBar).toBeTruthy();
  });

  it('should bind the user input to the search term', () => {
    const searchTerm = 'testing';
    const searchBar = fixture.nativeElement.querySelector('input');

    searchBar.value = searchTerm;
    searchBar.dispatchEvent(new Event('input'));

    expect(component.term).toEqual(searchTerm);
  });

  it('search should return matching repositories from the repository service', () => {
    const searchTerm = 'zagaku';
    const searchBar = fixture.nativeElement.querySelector('input');
    const form = fixture.nativeElement.querySelector('form');
    searchBar.value = searchTerm;

    searchBar.dispatchEvent(new Event('input'));
    form.dispatchEvent(new Event('ngSubmit'));

    const expectedResult = [REPOSITORIES[0]];

    expect(component.results).toEqual(expectedResult);
  });

  it('print results should display the search term and the number of results on the page when one result is found', () => {
    const searchTerm = 'zagaku';
    const searchBar = fixture.nativeElement.querySelector('input');
    const form = fixture.nativeElement.querySelector('form');
    searchBar.value = searchTerm;

    searchBar.dispatchEvent(new Event('input'));
    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();

    const resultsInfo = fixture.nativeElement.querySelector('#results-info');

    expect(resultsInfo.textContent).toContain('Found 1 repository matching "zagaku":');
  });

  it('print results should display the search term and the number of results on the page when multiple results are found', () => {
    const searchTerm = 'blog';
    const searchBar = fixture.nativeElement.querySelector('input');
    const form = fixture.nativeElement.querySelector('form');
    searchBar.value = searchTerm;

    searchBar.dispatchEvent(new Event('input'));
    form.dispatchEvent(new Event('ngSubmit'));

    const resultsInfo = fixture.nativeElement.querySelector('#results-info');

    expect(resultsInfo.textContent).toContain('Found 2 repositories matching "blog":');
  });

  it('print results should display the search term and the number of results on the page when no results are found', () => {
    const searchTerm = 'testing';
    const searchBar = fixture.nativeElement.querySelector('input');
    const form = fixture.nativeElement.querySelector('form');
    searchBar.value = searchTerm;

    searchBar.dispatchEvent(new Event('input'));
    form.dispatchEvent(new Event('ngSubmit'));

    const resultsInfo = fixture.nativeElement.querySelector('#results-info');

    expect(resultsInfo.textContent).toContain('Found no repositories matching "testing".');
  });

  it('should render preview tiles for each of the search results returned', () => {
    const searchTerm = 'blog';
    const searchBar = fixture.nativeElement.querySelector('input');
    const form = fixture.nativeElement.querySelector('form');
    searchBar.value = searchTerm;

    searchBar.dispatchEvent(new Event('input'));
    form.dispatchEvent(new Event('ngSubmit'));
    const resultsCount = component.results?.length;
    const previewTilesCount = compiled.querySelectorAll('.repo-preview').length;

    expect(resultsCount).toEqual(previewTilesCount);
  });

  it('clicking on a search result should take you to the detail page for that repository', () => {
    const searchTerm = 'zagaku';
    const searchBar = fixture.nativeElement.querySelector('input');
    const form = fixture.nativeElement.querySelector('form');
    searchBar.value = searchTerm;

    searchBar.dispatchEvent(new Event('input'));
    form.dispatchEvent(new Event('ngSubmit'));

    const link = compiled.querySelector('a');

    link?.click();

    expect(location.path()).toEqual('/detail/zagaku');
  });
});
