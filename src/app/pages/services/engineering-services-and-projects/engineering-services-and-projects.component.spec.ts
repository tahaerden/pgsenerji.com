import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringServicesAndProjectsComponent } from './engineering-services-and-projects.component';

describe('EngineeringServicesAndProjectsComponent', () => {
  let component: EngineeringServicesAndProjectsComponent;
  let fixture: ComponentFixture<EngineeringServicesAndProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineeringServicesAndProjectsComponent]
    });
    fixture = TestBed.createComponent(EngineeringServicesAndProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
