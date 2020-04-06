import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { Facility } from 'src/app/admin-menu/models/facility.model';
import { OrganizationsService } from 'src/app/admin-menu/services/organizations.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-facility-card",
    templateUrl: "./facilities-list.component.html"
})

export class FacilitiesListComponent {
    @Input() facility: Facility;
    @Input() organizationId: number;

    constructor(private organizationService: OrganizationsService,
        private router: Router,
        private authenticationService: AuthenticationService) {
    }

    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

    deleteFacility() {
        this.organizationService.deleteFacility(this.facility.id).toPromise().then(e => {
            location.reload();
        });
    }
    details() {
        this.router.navigate(['menu', 'facilities', this.facility.id]);
    }
}