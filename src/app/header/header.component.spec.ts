import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        NavBarComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the application name', () => {
    const appName = compiled.querySelector('.app-name');
    
    expect(appName?.textContent).toEqual('8th Light Highlight');
  });

  it('should render the navigation bar', () => {
    const navBar = compiled.querySelector('.nav-bar');

    expect(navBar).toBeTruthy();
  })
});
