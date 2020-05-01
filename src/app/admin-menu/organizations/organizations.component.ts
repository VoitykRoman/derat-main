import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from '../services/organizations.service';
import { Organization } from '../models/organization.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { User } from 'src/app/main/models/user.model';
import { IgxFilterOptions } from 'igniteui-angular';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-projects",
    styleUrls: ["./organizations.component.scss"],
    templateUrl: "./organizations.component.html"
})
export class OrganizationsComponent implements OnInit {

    loading = true;
    organizations: Organization[];
    currentUser: User;
    constructor(private organizationsService: OrganizationsService,
        public authenticationService: AuthenticationService,
        public translateService: TranslateService ) {
    }
    searchOrganization;
    ngOnInit() {
        this.downloadData();
    }

    downloadData() {
        this.organizationsService.getAllOrganizations(this.authenticationService.currentUserValue.id).toPromise().then((w: Organization[]) => {
            this.organizations = w;
            this.loading = false;
        });
    }
    onCreate() {
        this.loading = true;
        this.downloadData();
    }

    onDelete(id) {
        this.organizations = this.organizations.filter(e => e.id != id);


    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }


    get filterOrganizations(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "name";
        fo.inputValue = this.searchOrganization;
        return fo;
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