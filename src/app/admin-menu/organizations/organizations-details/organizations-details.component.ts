import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationsService } from '../../services/organizations.service';
import { Organization } from '../../models/organization.model';
import { Project } from '../../models/project.model';
import { ProjectStatuses } from 'src/app/shared/project-statuses.enum';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { Facility } from '../../models/facility.model';
import { User } from 'src/app/main/models/user.model';
import { IgxFilterOptions } from 'igniteui-angular';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-project-details",
    templateUrl: "./organizations-details.component.html"
})
export class OrganizationsDetailsComponent implements OnInit {

    organization: Organization;
    obs;
    projectsPage = 1;
    pageSize = 2;
    fPage = 1;
    cPage = 1;
    loading = true;
    searchFacility;
    searchClient;
    constructor(private route: ActivatedRoute,
        private organizationsService: OrganizationsService,
        public authenticationService: AuthenticationService,
        public translateService: TranslateService ) {
    }

    ngOnInit() {
        this.downloadData();
    }
    downloadData() {
        const organizationId = +this.route.snapshot.paramMap.get('id');
        this.obs = this.organizationsService.getOrganizationById(organizationId);
        this.obs.subscribe((org: Organization) => {
            this.organization = org;
            this.loading = false;
        });
    }

    onCreate() {
        this.loading = true;
        this.downloadData();
    }
    onClientDelete() {
        this.loading = true;
        this.downloadData();
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

    get filterFacilities(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "name";
        fo.inputValue = this.searchFacility;
        return fo;
    }

    get filterClients(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "lastName";
        fo.inputValue = this.searchClient;
        return fo;
    }
    get fPagination(): Facility[] {
        return this.organization.facilities
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.fPage - 1) * this.fPage, (this.fPage - 1) * this.pageSize + this.pageSize);
    }

    get cPagination(): User[] {
        return this.organization.clients
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.cPage - 1) * this.cPage, (this.cPage - 1) * this.pageSize + this.pageSize);
    }

    get projectsPagination(): Project[] {
        return this.organization.projects
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.projectsPage - 1) * this.projectsPage, (this.projectsPage - 1) * this.pageSize + this.pageSize);
    }
}
