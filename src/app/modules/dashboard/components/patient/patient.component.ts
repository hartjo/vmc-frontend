import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import * as fromDashboard from '../../state/selectors/dashboard.selectors';
import { Store, select } from '@ngrx/store';
import { listDoctor, listPatient } from '../../state/actions/dashboard.actions';
import { takeUntil } from 'rxjs/operators';
import { AppBaseComponent } from '@shared/components/AppBaseComponent';
import * as TableDoctorsColumn from '../../jsons/doctors-column.json';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent extends AppBaseComponent implements OnInit, OnDestroy {

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

    this.store.dispatch(listPatient({params: {}}));

    this.patientSubscribers();

  }

  ngOnDestroy(): void {
    this.unsubscribe$();
  }

  patientSubscribers() {

    this.store.pipe(select(fromDashboard.listPatientSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.table.list = response.list;
        console.log(this.table);
      }

    });

    this.store.pipe(select(fromDashboard.listPatientFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        console.log(response.error);
      }

    });

  }

}
