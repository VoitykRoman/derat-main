import { Component, Input } from '@angular/core';
import { Organization } from '../../models/organization.model';
import { Router } from '@angular/router';

@Component({
    selector: "app-organization-card",
    styleUrls: ["./organization-card.component.scss"],
    templateUrl: "./organization-card.component.html"
})
export class OrganizationCardComponent {

   @Input() organization:Organization;

   /**
    *
    */
   constructor(private router: Router) {
      
   }
   openDetails(){
    this.router.navigate(['admin', 'organizations', this.organization.id]);
}
}