import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDensityComponent } from './button-density.component';

describe('ButtonDensityComponent', () => {
  let component: ButtonDensityComponent;
  let fixture: ComponentFixture<ButtonDensityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonDensityComponent]
    });
    fixture = TestBed.createComponent(ButtonDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
