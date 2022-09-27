import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { RepoService } from '../repo.service';
import { RepoServiceStub, testRoutes } from '../test-helpers';
import { RepoDetailComponent } from './repo-detail.component';


describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;
  let repoService: RepoService;
  let compiled: HTMLElement;
  let repoName: BehaviorSubject<any> = new BehaviorSubject<any>("");

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDetailComponent ],
      imports: [ 
        RouterTestingModule.withRoutes(testRoutes)
      ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: <Partial<ActivatedRoute>>{ 
            params: repoName.asObservable()
          }
        },
        {
          provide: RepoService,
          useValue: new RepoServiceStub()
        },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDetailComponent);
    repoService = TestBed.inject(RepoService);
    component = fixture.componentInstance;
  });

  it('should create the repository detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should render details about the repository whose name matches the current location', () => {    
    repoName.next({name: 'zagaku'}); 

    fixture = TestBed.createComponent(RepoDetailComponent);
    compiled = fixture.nativeElement;

    const renderedName = compiled.querySelector('.repo-name')?.textContent;

    expect(renderedName).toEqual('zagaku');
  });

  it('should render a "not found" message if repository does not exist', () => {
    repoName.next({name: 'badName'}); 

    fixture = TestBed.createComponent(RepoDetailComponent);
    compiled = fixture.nativeElement;

    const notFound = compiled.querySelector('.not-found');
    const renderedName = compiled.querySelector('.repo-name')?.textContent;

    expect(notFound).toBeTruthy();
    expect(renderedName).toBeFalsy();
  });
});
