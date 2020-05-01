import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthenticationService } from '../main/services/authentication.service';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: "app-nav-drawer-mini",
  styleUrls: ["./admin-menu.component.scss"],
  templateUrl: "./admin-menu.component.html"
})
export class AdminMenuComponent implements OnInit {
  currentUser
  constructor(private router: Router, public authenticationService: AuthenticationService,public translateService: TranslateService) {
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue;

  }
  redirectToProjects() {
    this.router.navigate(['/']);
  }

  isAdmin() {
    return this.currentUser?.role == "admin";
  }
  isClient() {
    return this.currentUser?.role == "client";
  }
  isEmployee() {
    return this.currentUser?.role == "employee";
  }
}
