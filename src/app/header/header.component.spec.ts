import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the application name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const appName = compiled.querySelector('.app-name');
    
    expect(appName?.textContent).toEqual('8th Light Highlight');
  });

  it('should render the navigation bar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navBar = compiled.querySelector('.nav-bar');

    expect(navBar).toBeTruthy();
  })
});
