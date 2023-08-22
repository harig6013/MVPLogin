import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTerminationComponent } from './hr-termination.component';

describe('HrTerminationComponent', () => {
  let component: HrTerminationComponent;
  let fixture: ComponentFixture<HrTerminationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrTerminationComponent]
    });
    fixture = TestBed.createComponent(HrTerminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
