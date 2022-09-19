import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the NavBarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render a link for each of the paths', () => {
    const navBar = fixture.nativeElement.querySelector('.nav-bar');
    
    expect(navBar.textContent).toContain('Dashboard');
    expect(navBar.textContent).toContain('Search');
  });
});
