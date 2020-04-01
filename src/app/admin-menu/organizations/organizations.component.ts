import { Component } from '@angular/core';
import { OrganizationsService } from '../services/organizations.service';
import { Organization } from '../models/organization.model';

@Component({
    selector: "app-projects",
    styleUrls: ["./organizations.component.scss"],
    templateUrl: "./organizations.component.html"
})
export class OrganizationsComponent {

    organizations:Organization[];

    constructor(private organizationsService: OrganizationsService) {
        organizationsService.getAllOrganizations().subscribe((e:Organization[]) => {
            this.organizations = e;
        })
    }



    activePage = 1;
    pendingPage = 1;
    donePage = 1;
    pageSize = 3;

    get organizationsPagination(): Organization[] {
        return this.organizations
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.activePage - 1) * this.pageSize, (this.activePage - 1) * this.pageSize + this.pageSize);
    }
}