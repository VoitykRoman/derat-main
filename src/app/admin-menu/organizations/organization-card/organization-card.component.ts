import { Component, Input } from '@angular/core';
import { Organization } from '../../models/organization.model';

@Component({
    selector: "app-organization-card",
    styleUrls: ["./organization-card.component.scss"],
    templateUrl: "./organization-card.component.html"
})
export class OrganizationCardComponent {

   @Input() organization:Organization;

}