import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { Facility } from 'src/app/admin-menu/models/facility.model';
import { OrganizationsService } from 'src/app/admin-menu/services/organizations.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-facility-card",
    templateUrl: "./facilities-list.component.html"
})

export class FacilitiesListComponent {
    @Input() facility: Facility;
    @Input() organizationId: number;
    @Output() onDelete = new EventEmitter<any>();
    constructor(private organizationService: OrganizationsService,
        private router: Router,
        private authenticationService: AuthenticationService,
        public translateService: TranslateService) {
    }

    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

    deleteFacility() {
        this.organizationService.deleteFacility(this.facility.id).toPromise().then(e => {
           
        });
        this.onDelete.emit();
    }
    details() {
        this.router.navigate(['menu', 'facilities', this.facility.id]);
    }
}