import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLeaveComponent } from './hr-leave.component';

describe('HrLeaveComponent', () => {
  let component: HrLeaveComponent;
  let fixture: ComponentFixture<HrLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrLeaveComponent]
    });
    fixture = TestBed.createComponent(HrLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
