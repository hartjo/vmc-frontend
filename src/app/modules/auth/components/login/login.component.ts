import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../state/selectors/auth.selectors';
import { login } from '../../state/actions/auth.actions';
import { AppBaseComponent } from '@shared/components/AppBaseComponent';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AppBaseComponent implements  OnInit, OnDestroy {

  loading = false;

  authenticationForm: FormGroup;

  constructor(
    private store: Store<fromAuth.State>,
    private fb: FormBuilder,
    private router: Router,
    injector: Injector
  ) {
    super(injector);
   }

  ngOnInit(): void {

    this.authenticationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.loginSubscribers();

  }

  ngOnDestroy(): void {
    this.unsubscribe$();
  }

  login() {
    console.log(this.authenticationForm);
    this.store.dispatch(login({params: this.authenticationForm.value}));
  }

  loginSubscribers(){

    this.store.pipe(select(fromAuth.loginSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        console.log(response);
        this.router.navigate(['/dashboard']);
      }

    });

    this.store.pipe(select(fromAuth.loginFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        console.log(response.error);
      }

    });

  }

}
