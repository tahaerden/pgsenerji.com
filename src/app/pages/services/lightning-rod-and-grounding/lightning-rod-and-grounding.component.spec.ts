import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningRodAndGroundingComponent } from './lightning-rod-and-grounding.component';

describe('LightningRodAndGroundingComponent', () => {
  let component: LightningRodAndGroundingComponent;
  let fixture: ComponentFixture<LightningRodAndGroundingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightningRodAndGroundingComponent]
    });
    fixture = TestBed.createComponent(LightningRodAndGroundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
