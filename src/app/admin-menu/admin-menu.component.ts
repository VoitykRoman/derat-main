import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AuthenticationService } from '../main/services/authentication.service';

@Component({
  selector: "app-nav-drawer-mini",
  styleUrls: ["./admin-menu.component.scss"],
  templateUrl: "./admin-menu.component.html"
})
export class AdminMenuComponent {
  currentUser
  constructor(private router: Router, public authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(u => {
      this.currentUser = u;
    })

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
