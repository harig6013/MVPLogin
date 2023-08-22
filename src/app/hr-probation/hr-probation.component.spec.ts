import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrProbationComponent } from './hr-probation.component';

describe('HrProbationComponent', () => {
  let component: HrProbationComponent;
  let fixture: ComponentFixture<HrProbationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrProbationComponent]
    });
    fixture = TestBed.createComponent(HrProbationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
