import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeLightingComponent } from './landscape-lighting.component';

describe('LandscapeLightingComponent', () => {
  let component: LandscapeLightingComponent;
  let fixture: ComponentFixture<LandscapeLightingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandscapeLightingComponent]
    });
    fixture = TestBed.createComponent(LandscapeLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
