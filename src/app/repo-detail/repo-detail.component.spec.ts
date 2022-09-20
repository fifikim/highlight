import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RepoDetailComponent } from './repo-detail.component';

describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDetailComponent ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: <Partial<ActivatedRoute>>{ params: of({ name: 'zagaku' })}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDetailComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the repository detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should render details about the repository whose name matches the current location', () => {
    const repoName = compiled.querySelector('.repo-name')?.textContent;

    expect(repoName).toEqual('zagaku');
  });
});
