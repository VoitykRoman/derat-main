import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationsService } from '../../services/organizations.service';
import { Organization } from '../../models/organization.model';

@Component({
    selector: "app-project-details",
    templateUrl: "./organizations-details.component.html"
})
export class OrganizationsDetailsComponent {

    organization: Organization;
    obs;
    constructor(private route: ActivatedRoute,
        organizationsService: OrganizationsService) {
        const organizationId = +this.route.snapshot.paramMap.get('id');
        this.obs = organizationsService.getOrganizationById(organizationId);
        this.obs.subscribe((org: Organization) => {
            this.organization = org;
        });
    }
}
