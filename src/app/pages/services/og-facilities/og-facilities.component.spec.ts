import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgFacilitiesComponent } from './og-facilities.component';

describe('OgFacilitiesComponent', () => {
  let component: OgFacilitiesComponent;
  let fixture: ComponentFixture<OgFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OgFacilitiesComponent]
    });
    fixture = TestBed.createComponent(OgFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
