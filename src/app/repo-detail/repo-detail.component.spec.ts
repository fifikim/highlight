import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { MapperService } from '../mapper.service';
import { RepoService } from '../repo.service';
import { RepoServiceStub, MapperServiceStub, testRoutes } from '../test-helpers';
import { RepoDetailComponent } from './repo-detail.component';

describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;
  let repoService: RepoService;
  let mapperService: MapperService;
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
        {
          provide: MapperService,
          useValue: new MapperServiceStub()
        },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDetailComponent);
    repoService = TestBed.inject(RepoService);
    mapperService = TestBed.inject(MapperService);
    component = fixture.componentInstance;
  });

  it('should create the repository detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should render details about the repository whose name matches the current location', () => {    
    repoName.next({name: 'zagaku'}); 

    fixture = TestBed.createComponent(RepoDetailComponent);
    compiled = fixture.nativeElement;

    const notFound = compiled.querySelector('.not-found');
    const loading = compiled.querySelector('#loading');
    const renderedName = compiled.querySelector('.repo-name')?.textContent;

    expect(notFound).toBeFalsy();
    expect(loading).toBeFalsy();
    expect(renderedName).toEqual('zagaku');
  });

  it('should render a "not found" message if repository does not exist', () => {
    repoName.next({name: 'badName'}); 

    fixture = TestBed.createComponent(RepoDetailComponent);
    compiled = fixture.nativeElement;

    const notFound = compiled.querySelector('.not-found');
    const loading = compiled.querySelector('#loading');
    const renderedName = compiled.querySelector('.repo-name')?.textContent;

    expect(notFound).toBeTruthy();
    expect(loading).toBeFalsy();
    expect(renderedName).toBeFalsy();
  });
});
