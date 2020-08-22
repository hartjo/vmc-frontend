import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../state/selectors/auth.selectors';
import * as fromRoot from '@rootState/store';
import { login, loginClear } from '../../state/actions/auth.actions';
import { AppBaseComponent } from '@shared/components/AppBaseComponent';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { addCredentials, addCredentialsSuccess } from '@rootState/actions/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AppBaseComponent implements  OnInit, OnDestroy {

  loading = false;

  authenticationForm: FormGroup;

  error = null;

  constructor(
    private store: Store<fromAuth.State>,
    private storeRoot: Store<fromRoot.State>,
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
    this.loading = true;
    if (this.authenticationForm.valid === false) {
      this.error = 'Username or Password is Incorrect!';
      return false;
    }
    this.store.dispatch(login({params: this.authenticationForm.value}));
  }

  loginSubscribers(){

    this.store.pipe(select(fromAuth.loginSuccess) , takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.loading = false;
        localStorage.setItem('token', JSON.stringify(response.token));
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('credentials', JSON.stringify(response));
        this.storeRoot.dispatch(addCredentialsSuccess({data: response}));
        this.store.dispatch(loginClear());
        this.router.navigate(['/dashboard']);
      }

    });

    this.store.pipe(select(fromAuth.loginFailure), takeUntil(this.destroy$)).subscribe(response => {
      if (response !== null) {
        this.loading = false;
        this.error = 'Username or Password is Incorrect!';
      }

    });

  }

}
