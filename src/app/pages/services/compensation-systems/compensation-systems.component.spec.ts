import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationSystemsComponent } from './compensation-systems.component';

describe('CompensationSystemsComponent', () => {
  let component: CompensationSystemsComponent;
  let fixture: ComponentFixture<CompensationSystemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompensationSystemsComponent]
    });
    fixture = TestBed.createComponent(CompensationSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
