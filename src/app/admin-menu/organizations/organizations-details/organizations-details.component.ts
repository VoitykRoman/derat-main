import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationsService } from '../../services/organizations.service';
import { Organization } from '../../models/organization.model';
import { Project } from '../../models/project.model';
import { ProjectStatuses } from 'src/app/shared/project-statuses.enum';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { Facility } from '../../models/facility.model';

@Component({
    selector: "app-project-details",
    templateUrl: "./organizations-details.component.html"
})
export class OrganizationsDetailsComponent {

    organization: Organization;
    obs;
    projectsPage = 1;
    pageSize = 2;
    fPage =1 ;
    constructor(private route: ActivatedRoute,
        private organizationsService: OrganizationsService,
        private authenticationService: AuthenticationService) {
        const organizationId = +this.route.snapshot.paramMap.get('id');
        this.obs = organizationsService.getOrganizationById(organizationId);
        this.obs.subscribe((org: Organization) => {
            this.organization = org;

        });
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
    get fPagination(): Facility[] {
        return this.organization.facilities
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.fPage - 1) * this.fPage, (this.fPage - 1) * this.pageSize + this.pageSize);
    }

    get projectsPagination(): Project[] {
        return this.organization.projects
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.projectsPage - 1) * this.projectsPage, (this.projectsPage - 1) * this.pageSize + this.pageSize);
    }
}
