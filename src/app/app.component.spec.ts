import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { testRoutes, RouterLinkStubDirective } from './test-helpers';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';


describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let linkElements: DebugElement[];
  let routerLinks: RouterLinkStubDirective[];

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
        RouterLinkStubDirective,
        HomeComponent,
        SearchComponent,
        RepoDetailComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement;
    linkElements = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    routerLinks = linkElements.map(element => element.injector.get(RouterLinkStubDirective));
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

  it('should render navigation links from the header component', () => {
    expect(linkElements.length).toBe(3);
    expect(routerLinks.length).toBe(3);
    expect(routerLinks[0].linkParams).toBe('/');
    expect(routerLinks[1].linkParams).toBe('/dashboard');
    expect(routerLinks[2].linkParams).toBe('/search');
  });

  it('can click header title to navigate to the root path', () => {
    const rootLink = linkElements[0];   
    const rootLinkDirective = routerLinks[0]; 
  
    expect(rootLinkDirective.navigatedTo).toBeNull();
  
    rootLink.nativeElement.click();
  
    expect(rootLinkDirective.navigatedTo).toBe('/');
  });
  
  it('can click dashboard link in navigation bar', () => {
    const dashboardLink = linkElements[1];   
    const dashboardLinkDirective = routerLinks[1];  
  
    expect(dashboardLinkDirective.navigatedTo).toBeNull();
  
    dashboardLink.nativeElement.click();
  
    expect(dashboardLinkDirective.navigatedTo).toBe('/dashboard');
  });

  it('can click search link in navigation bar', () => {
    const searchLink = linkElements[2];    
    const searchLinkDirective = routerLinks[2];  
  
    expect(searchLinkDirective.navigatedTo).toBeNull();
  
    searchLink.nativeElement.click();
  
    expect(searchLinkDirective.navigatedTo).toBe('/search');
  });
});
