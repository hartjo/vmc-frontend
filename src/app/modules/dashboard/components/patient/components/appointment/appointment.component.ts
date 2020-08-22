import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { AppBaseComponent } from '@shared/components/AppBaseComponent';
import { Store, select } from '@ngrx/store';
import { listDoctor, getScheduleDoctor } from 'src/app/modules/dashboard/state/actions/dashboard.actions';
import { takeUntil } from 'rxjs/operators';
import * as fromDashboard from '../../../../state/selectors/dashboard.selectors';
import * as TableDoctorsColumn from '../../../../jsons/doctors-column.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarOptions } from '@fullcalendar/angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent extends AppBaseComponent implements OnInit, OnDestroy {

  table = {
    columns: TableDoctorsColumn.columns,
    list: []
  };

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    hiddenDays: [ 1, 2, 4 ],
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  showCalendar = false;
  selectLoader = false;
  content: any;

  constructor(
    private store: Store<fromDashboard.State>,
    injector: Injector,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {
    super(injector);
   }

  ngOnInit(): void {

    this.store.dispatch(listDoctor({params: {}}));

    this.doctorsSubscribers();
    this.getScheduleDoctorSubscribers();

  }

  ngOnDestroy(): void {
    this.unsubscribe$();
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
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

  select(record, content) {
    this.content = content;
    this.selectLoader = true;
    this.store.dispatch(getScheduleDoctor({params: record}));
  }

  getScheduleDoctorSubscribers(){

    this.store.pipe(select(fromDashboard.getScheduleDoctorSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        if (response.list.length <= 0) {
          this.toastr.warning('No Available Schedule for this Doctor!', 'Warning!');
        } else {
          this.calendarOptions.hiddenDays = [];
          response.list.forEach(item => {
            this.calendarOptions.hiddenDays.push(item.day);
          });

          this.modalService.open(this.content, { size: 'xl' });
          setTimeout(() => {
            this.showCalendar = true;
          });
        }
      }

    });

    this.store.pipe(select(fromDashboard.getScheduleDoctorFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        console.log(response.error);
        this.toastr.error('Something went wrong!', 'Error!');
      }

    });
  }

}
