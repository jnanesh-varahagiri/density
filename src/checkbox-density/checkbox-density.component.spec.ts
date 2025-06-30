import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDensityComponent } from './checkbox-density.component';

describe('CheckboxDensityComponent', () => {
  let component: CheckboxDensityComponent;
  let fixture: ComponentFixture<CheckboxDensityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckboxDensityComponent]
    });
    fixture = TestBed.createComponent(CheckboxDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
