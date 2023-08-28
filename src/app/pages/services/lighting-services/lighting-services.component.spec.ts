import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingServicesComponent } from './lighting-services.component';

describe('LightingServicesComponent', () => {
  let component: LightingServicesComponent;
  let fixture: ComponentFixture<LightingServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightingServicesComponent]
    });
    fixture = TestBed.createComponent(LightingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
