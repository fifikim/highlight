import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseComponent } from './browse/browse.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { SearchComponent } from './search/search.component';
import { RepoPreviewComponent } from './repo-preview/repo-preview.component';
import { OrgStatComponent } from './org-stat/org-stat.component';
import { testRoutes } from './test-helpers';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(testRoutes),
        BrowserModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        NavBarComponent,
        HomeComponent,
        DashboardComponent,
        OrgStatComponent,
        BrowseComponent,
        RepoDetailComponent,
        RepoPreviewComponent,
        SearchComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    
    compiled = fixture.nativeElement;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should render the header`, () => {
    const header = compiled.querySelector('header');

    expect(header).toBeTruthy();
  });

  it('should render the navigation bar', () => {
    const navBar = compiled.querySelector('.nav-bar');

    expect(navBar).toBeTruthy();
  });

  it('should redirect to the "/dashboard" path when current location is the root path', () => {
    router.navigate(['']);
    fixture.detectChanges();

    expect(location.path()).toEqual('/dashboard');
  });

  // it('should render the Home component when the current location is "/dashboard"', () => {
  //   router.navigate(['/dashboard']);
  //   fixture.detectChanges();

  //   const home = fixture.debugElement.query(By.directive(HomeComponent)).componentInstance;

  //   expect(home).toBeTruthy();
  // });

  // it('should render the search page when the current location is "/search"', () => {
  //   router.navigate(['/search']);
  //   fixture.detectChanges();

  //   const search = fixture.debugElement.query(By.directive(SearchComponent)).componentInstance;

  //   expect(search).toBeTruthy();
  // });

  // it('should render the detail page for a repository when the current location is "/detail/(repo name)"', () => {
  //   router.navigate(['/detail/zagaku']);
  //   fixture.detectChanges();

  //   const details = fixture.debugElement.query(By.directive(RepoDetailComponent)).componentInstance;
  //   const repoName = compiled.querySelector('.repo-name')?.textContent;

  //   expect(details).toBeTruthy();
  //   expect(repoName).toEqual('zagaku');
  // });
});
