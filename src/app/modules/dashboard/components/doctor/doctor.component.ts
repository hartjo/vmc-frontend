import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import * as fromDashboard from '../../state/selectors/dashboard.selectors';
import { Store, select } from '@ngrx/store';
import { listDoctor } from '../../state/actions/dashboard.actions';
import { takeUntil } from 'rxjs/operators';
import { AppBaseComponent } from '@shared/components/AppBaseComponent';
import * as TableDoctorsColumn from '../../jsons/doctors-column.json';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent extends AppBaseComponent implements OnInit, OnDestroy {

  table = {
    columns: TableDoctorsColumn.columns,
    list: []
  };

  constructor(
    private store: Store<fromDashboard.State>,
    injector: Injector
  ) {
    super(injector);
   }

  ngOnInit(): void {

    this.store.dispatch(listDoctor({params: {}}));

    this.doctorsSubscribers();

  }

  ngOnDestroy(): void {
    this.unsubscribe$();
  }

  doctorsSubscribers() {

    this.store.pipe(select(fromDashboard.listDoctorSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.table.list = response.list;
        console.log(this.table);
      }

    });

    this.store.pipe(select(fromDashboard.listDoctorFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        console.log(response.error);
      }

    });

  }

}
