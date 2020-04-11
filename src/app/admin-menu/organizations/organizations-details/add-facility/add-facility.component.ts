import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FacilityService } from 'src/app/admin-menu/services/facility.service';
import { Organization } from 'src/app/admin-menu/models/organization.model';

@Component({
    selector: "app-add-facility",
    templateUrl: "./add-facility.component.html"
})
export class AddFacilityComponent {

    @Input() organization: Organization;
    @Output() onCreate = new EventEmitter<any>();
    facility = {
        name: undefined,
        address: undefined,
        organizationId: undefined
    }
    constructor(private facilityService: FacilityService) {
    }

    onSubmit() {
        this.facility.organizationId = this.organization.id;
        this.facilityService.createFacility(this.facility).toPromise().then(e => {
            this.onCreate.emit();
        });
    }
}