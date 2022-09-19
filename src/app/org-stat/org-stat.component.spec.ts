import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgStatComponent } from './org-stat.component';
import { REPOSITORIES } from '../mock-data';

describe('OrgStatComponent', () => {
  let component: OrgStatComponent;
  let fixture: ComponentFixture<OrgStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgStatComponent);
    component = fixture.componentInstance;
    component.repo = REPOSITORIES[0];
    component.stat = 'Test Stat';
    fixture.detectChanges();
  });

  it('should create the OrgStatComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should receive repo as input and display its name', () => {
    const firstOrganizationStat = fixture.nativeElement.querySelector('.stat');

    expect(firstOrganizationStat?.textContent).toContain('zagaku');
  });

  it('should receive as input and display stat data', () => {
    const firstOrganizationStat = fixture.nativeElement.querySelector('.stat');

    expect(firstOrganizationStat?.textContent).toContain('Test Stat');
  });
});
