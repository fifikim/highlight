import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';
import { testRoutes } from '../test-helpers';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let location: Location;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [ 
        RouterTestingModule.withRoutes(testRoutes)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the NavBarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render a link for each of the paths', () => {
    const navBar = compiled.querySelector('.nav-bar');
    
    expect(navBar?.textContent).toContain('Dashboard');
    expect(navBar?.textContent).toContain('Search');
  });

  it('each navigation link points to the appropriate route', () => {
    const dashboardLink = compiled.querySelector('#dashboard')?.getAttribute('href');
    const searchLink = compiled.querySelector('#search')?.getAttribute('href');

    expect(dashboardLink).toEqual('/dashboard');
    expect(searchLink).toEqual('/search');
  });

  it('clicking the dashboard link navigates to the correct page', () => {
    const link = fixture.nativeElement.querySelector('#dashboard');

    link.click();

    expect(location.path()).toEqual('/dashboard');
  });

  it('clicking the search link navigates to the correct page', () => {
    const link = fixture.nativeElement.querySelector('#search');

    link.click();

    expect(location.path()).toEqual('/search');
  });
});
