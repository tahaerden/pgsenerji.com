import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPartnersComponent } from './solution-partners.component';

describe('SolutionPartnersComponent', () => {
  let component: SolutionPartnersComponent;
  let fixture: ComponentFixture<SolutionPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionPartnersComponent]
    });
    fixture = TestBed.createComponent(SolutionPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
