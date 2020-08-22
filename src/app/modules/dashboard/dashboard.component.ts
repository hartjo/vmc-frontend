import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '@rootState/store';
import { Logout } from '@rootState/actions/app.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  user: any;

  constructor(
    private storeRoot: Store<fromRoot.State>,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }

  logout() {
    this.storeRoot.dispatch(Logout());
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
