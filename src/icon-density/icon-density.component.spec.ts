import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDensityComponent } from './icon-density.component';

describe('IconDensityComponent', () => {
  let component: IconDensityComponent;
  let fixture: ComponentFixture<IconDensityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconDensityComponent]
    });
    fixture = TestBed.createComponent(IconDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
