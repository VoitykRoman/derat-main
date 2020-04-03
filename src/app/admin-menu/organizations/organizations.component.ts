import { Component } from '@angular/core';
import { OrganizationsService } from '../services/organizations.service';
import { Organization } from '../models/organization.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { User } from 'src/app/main/models/user.model';

@Component({
    selector: "app-projects",
    styleUrls: ["./organizations.component.scss"],
    templateUrl: "./organizations.component.html"
})
export class OrganizationsComponent {

    organizations: Organization[];
    currentUser: User;
    constructor(private organizationsService: OrganizationsService,
        public authenticationService: AuthenticationService) {
            // authenticationService.currentUserValue.id
            organizationsService.getAllOrganizations(authenticationService.currentUserValue.id).toPromise().then((w: Organization[]) => {
              this.organizations = w;       
        }) 
}
                                                       

    isAdmin(){
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient(){
        return this.authenticationService.currentUserValue.role == 'client'
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