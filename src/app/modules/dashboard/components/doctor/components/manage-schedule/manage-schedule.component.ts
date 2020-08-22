import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { AppBaseComponent } from '@shared/components/AppBaseComponent';
import { Store, select } from '@ngrx/store';
import * as fromDashboard from '../../../../state/selectors/dashboard.selectors';
import { updateSchedule, getSchedule } from 'src/app/modules/dashboard/state/actions/dashboard.actions';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.scss']
})
export class ManageScheduleComponent extends AppBaseComponent implements OnInit, OnDestroy {

  loader = false;

  scheduleSelected = [];

  constructor(
    private store: Store<fromDashboard.State>,
    injector: Injector
  ) {
    super(injector);
   }

  ngOnInit(): void {

    this.store.dispatch(getSchedule());

    this.saveSchedSubscribers();
    this.getSchedSubscribers();

  }

  ngOnDestroy(): void {
    this.unsubscribe$();
  }

  save() {
    this.loader = true;
    this.store.dispatch(updateSchedule({params: {schedule: this.scheduleSelected}}));

  }

  saveSchedSubscribers() {
    this.store.pipe(select(fromDashboard.updateScheduleSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.loader = false;
      }

    });

    this.store.pipe(select(fromDashboard.updateScheduleFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.loader = false;
      }

    });

  }

  getSchedSubscribers() {
    this.store.pipe(select(fromDashboard.getScheduleSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.scheduleSelected = [];

        response.list.forEach(item => {
          this.scheduleSelected.push(item.day);
        });
      }

    });

    this.store.pipe(select(fromDashboard.getScheduleFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.scheduleSelected = [];
      }

    });
  }

}
