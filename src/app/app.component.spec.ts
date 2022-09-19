import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrgStatComponent } from './org-stat/org-stat.component';
import { RepoPreviewComponent } from './repo-preview/repo-preview.component';

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
        NavBarComponent,
        DashboardComponent,
        BrowseComponent,
        OrgStatComponent,
        RepoPreviewComponent
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

  it('should render the dashboard', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const dashboard = compiled.querySelector('.dashboard');

    expect(dashboard).toBeTruthy();
  });

  it('should render organization stats in the dashboard', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const organizationStats = compiled.querySelector('.stats');

    expect(organizationStats).toBeTruthy();
  });

  it('should render the browse all section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const browseAll = compiled.querySelector('.browse-all');

    expect(browseAll).toBeTruthy();
  });

  it('should render repository previews in the browse all section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstRepoName = compiled.querySelector('.repo-name');

    expect(firstRepoName).toBeTruthy();
  });
});
