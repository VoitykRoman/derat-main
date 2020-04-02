import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { Facility } from 'src/app/admin-menu/models/facility.model';
import { OrganizationsService } from 'src/app/admin-menu/services/organizations.service';

@Component({
    selector: "app-facility-card",
    templateUrl: "./facilities-list.component.html"
})

export class FacilitiesListComponent {
    @Input() facility: Facility;
    @Input() organizationId: number;

    constructor(private organizationService: OrganizationsService) {
    }
    deleteFacility() {
        this.organizationService.deleteFacility(this.facility.id).subscribe(e => {

        });
    }
}