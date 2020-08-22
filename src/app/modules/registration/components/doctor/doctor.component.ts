import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import * as fromRegistration from '../../state/selectors/registration.selectors';
import { Store, select } from '@ngrx/store';
import { AppBaseComponent } from '@shared/components/AppBaseComponent';
import { doctorSpecialtiesListClear, doctorSpecialtiesList, saveDoctor, saveDoctorClear } from '../../state/actions/registration.actions';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent extends AppBaseComponent implements OnInit, OnDestroy {

  specialtiesList = [];

  doctorForm: FormGroup;
  submitted = false;
  loader = false;
  error = null;
  success = null;

  constructor(
    private store: Store <fromRegistration.State>,
    injector: Injector,
    private fb: FormBuilder,
    private scrollToService: ScrollToService
  ) {
    super(injector);
   }

  ngOnInit(): void {

    this.doctorForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: [null , Validators.required],
      gender: ['', Validators.required],
      specialties: [[], Validators.required],
    });

    this.store.dispatch(doctorSpecialtiesListClear());
    this.store.dispatch(saveDoctorClear());

    this.store.dispatch(doctorSpecialtiesList());

    this.docRegSubscribers();
    this.saveDoctorSubscribers();

  }

  ngOnDestroy(): void {
    this.unsubscribe$();
  }

  docRegSubscribers() {

    this.store.pipe(select(fromRegistration.specialtiesListSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
       this.specialtiesList = response.list;
      }

    });

    this.store.pipe(select(fromRegistration.specialtiesListFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        console.log(response.error);
      }

    });

  }

  submit() {

    if (this.loader === false) {
      this.loader = true;
      this.submitted = true;

      if (this.doctorForm.invalid) {

        const formErrors = [];

        Object.keys(this.doctorForm.controls).forEach(key => {
          const controlErrors: ValidationErrors = this.doctorForm.controls[key].errors;
          if (controlErrors != null) {
            formErrors.push(key);
          }
        });

        if (formErrors.length > 0) {
          const config: ScrollToConfigOptions = {
            target: formErrors[0],
            offset: -60
          };
          setTimeout(() => {
            this.scrollToService.scrollTo(config);
          }, 300);
        }

        this.error = {
          error: 'You need to fill all required fields.'
        };

        this.loader = false;
        return false;
      }

      if (this.doctorForm.value.password !== this.doctorForm.value.repassword ) {
        this.loader = false;
        return false;
      }

      this.store.dispatch(saveDoctor({params: this.doctorForm.value}));

    }

  }

  get fControls() { return this.doctorForm.controls; }

  get mfalues() { return this.doctorForm.value; }

  saveDoctorSubscribers() {
    this.store.pipe(select(fromRegistration.saveDoctorSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.doctorForm = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
          repassword: ['', Validators.required],
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          age: [null, Validators.required],
          gender: ['', Validators.required],
          specialties: [[], Validators.required],
        });
        this.submitted = false;
        this.loader = false;
        this.success = 'You are successfuly registered.';
        const config: ScrollToConfigOptions = {
          target: 'successmessage',
          offset: -60
        };
        this.scrollToService.scrollTo(config);
      }

    });

    this.store.pipe(select(fromRegistration.saveDoctorFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.loader = false;
        this.error = response.error;

        const config: ScrollToConfigOptions = {
          target: 'errormessage',
          offset: -60
        };
        this.scrollToService.scrollTo(config);
      }

    });
  }

}
