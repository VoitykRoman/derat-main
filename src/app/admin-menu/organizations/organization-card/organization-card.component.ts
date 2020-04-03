import { Component, Input } from '@angular/core';
import { Organization } from '../../models/organization.model';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { OrganizationsService } from '../../services/organizations.service';

@Component({
    selector: "app-organization-card",
    styleUrls: ["./organization-card.component.scss"],
    templateUrl: "./organization-card.component.html"
})
export class OrganizationCardComponent {

    @Input() organization: Organization;

    /**
     *
     */
    constructor(private router: Router,
        private authenticationService: AuthenticationService,
        private organizationsService: OrganizationsService) {

    }

    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

    delete() {
        this.organizationsService.deleteOrganization(this.organization.id).subscribe(e => {

        })
    }

    openDetails() {
        this.router.navigate(['menu', 'organizations', this.organization.id]);
    }
}