import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [ RouterModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the SearchBarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input field', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('#search-box')).toBeTruthy();
  });

  it('should render the search button', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('#search-box')).toBeTruthy();
  });

  it('should return a page containing the repository whose name matches the search term', () => {

  });
});
