import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { savePatientClear, savePatient } from '../../state/actions/registration.actions';
import { takeUntil } from 'rxjs/operators';
import * as fromRegistration from '../../state/selectors/registration.selectors';
import { AppBaseComponent } from '@shared/components/AppBaseComponent';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent extends AppBaseComponent implements OnInit, OnDestroy {

  specialtiesList = [];

  patientForm: FormGroup;
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

    this.patientForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: [null , Validators.required],
      gender: ['', Validators.required],
    });

    this.store.dispatch(savePatientClear());
    this.savePatientSubscribers();

  }

  ngOnDestroy(): void {
    this.unsubscribe$();
  }

  submit() {

    if (this.loader === false) {
      this.loader = true;
      this.submitted = true;

      if (this.patientForm.invalid) {

        const formErrors = [];

        Object.keys(this.patientForm.controls).forEach(key => {
          const controlErrors: ValidationErrors = this.patientForm.controls[key].errors;
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

      if (this.patientForm.value.password !== this.patientForm.value.repassword ) {
        this.loader = false;
        return false;
      }

      this.store.dispatch(savePatient({params: this.patientForm.value}));

    }

  }

  get fControls() { return this.patientForm.controls; }

  get mfalues() { return this.patientForm.value; }

  savePatientSubscribers() {
    this.store.pipe(select(fromRegistration.savePatientSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.patientForm = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
          repassword: ['', Validators.required],
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          age: [null, Validators.required],
          gender: ['', Validators.required],
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

    this.store.pipe(select(fromRegistration.savePatientFailure), takeUntil(this.destroy$)).subscribe(response => {
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
