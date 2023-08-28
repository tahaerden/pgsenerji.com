import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformersComponent } from './transformers.component';

describe('TransformersComponent', () => {
  let component: TransformersComponent;
  let fixture: ComponentFixture<TransformersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformersComponent]
    });
    fixture = TestBed.createComponent(TransformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
