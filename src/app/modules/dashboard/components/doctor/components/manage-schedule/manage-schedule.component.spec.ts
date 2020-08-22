import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageScheduleComponent } from './manage-schedule.component';

describe('ManageScheduleComponent', () => {
  let component: ManageScheduleComponent;
  let fixture: ComponentFixture<ManageScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
