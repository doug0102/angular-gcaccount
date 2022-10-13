import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { UserData } from '../../models/user-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  public isAuthenticated: boolean = false;
  public userData: UserData = new UserData();
  public accessToken: string = "";
  public idToken: string = "";

  constructor(public oidcSecurityService: OidcSecurityService, private router: Router) { }

  ngOnInit() : void {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      if (isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
      }

      if (userData) {
        this.userData = userData;
      }

      if (accessToken) {
        this.accessToken = accessToken;
      }

      if (idToken) {
        this.idToken = idToken;
      }
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  forceRefreshSession() {
    this.oidcSecurityService.forceRefreshSession().subscribe((result) => console.warn(result));
  }

  logout() {
    this.oidcSecurityService.logoff();
  }
}
