import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailComponent } from './repo-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDetailComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the repository detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all available details mapped in the correct format', () => {

  });

  it('should allow the user to navigate to the last page by clicking "back"', () => {

  });

});
