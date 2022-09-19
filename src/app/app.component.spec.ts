import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        NavBarComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should render the header`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header');

    expect(header).toBeTruthy();
  });

  it('should render the navigation bar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navBar = compiled.querySelector('.nav-bar');

    expect(navBar).toBeTruthy();
  });

  it('should render the Home component when the current location is the root path', () => {

  });

  it('should render the search page when the current location is "/search"', () => {

  });

  it('should render the detail page for a repository when the current location is "/detail/(repo name)"', () => {

  });
});
