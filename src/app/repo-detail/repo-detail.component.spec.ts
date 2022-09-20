import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { RepoDetailComponent } from './repo-detail.component';
import { testRoutes } from '../test-helpers';
import { Router } from '@angular/router';


describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;
  let compiled: HTMLElement;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDetailComponent ],
      imports: [
        RouterTestingModule.withRoutes(testRoutes),
        BrowserModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDetailComponent);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    
    compiled = fixture.nativeElement;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create the repository detail component', () => {
    expect(component).toBeTruthy();
  });

  // it('should render details about the repository whose name matches the current location', () => {
  //   router.navigate(['/detail/zagaku']);
  //   fixture.detectChanges();

  //   const repoName = compiled.querySelector('.repo-name')?.textContent;

  //   expect(repoName).toEqual('zagaku');
  // });
});
