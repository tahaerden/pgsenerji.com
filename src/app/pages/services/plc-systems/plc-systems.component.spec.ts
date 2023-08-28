import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcSystemsComponent } from './plc-systems.component';

describe('PlcSystemsComponent', () => {
  let component: PlcSystemsComponent;
  let fixture: ComponentFixture<PlcSystemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlcSystemsComponent]
    });
    fixture = TestBed.createComponent(PlcSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
