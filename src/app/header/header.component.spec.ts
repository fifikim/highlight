import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        SearchBarComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the application name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('.app-name')?.textContent).toEqual('8th Light Highlight');
  });

  it('should render the search bar', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#search-box')).toBeTruthy();
  })
});
