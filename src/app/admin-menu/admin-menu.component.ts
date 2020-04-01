import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-nav-drawer-mini",
  styleUrls: ["./admin-menu.component.scss"],
  templateUrl: "./admin-menu.component.html"
})
export class AdminMenuComponent  {
    constructor(private router: Router) {
    }

    redirectToProjects(){
        this.router.navigate(['/']);
    }
}
