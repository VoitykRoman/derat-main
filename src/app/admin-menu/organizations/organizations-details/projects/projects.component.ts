import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { Facility } from 'src/app/admin-menu/models/facility.model';
import { OrganizationsService } from 'src/app/admin-menu/services/organizations.service';
import { Organization } from 'src/app/admin-menu/models/organization.model';
import { Project } from 'src/app/admin-menu/models/project.model';
import { Router } from '@angular/router';

@Component({
    selector: "app-projects-org-card",
    templateUrl: "./projects.component.html"
})

export class ProjectsOrgComponent {
   
    @Input() project: Project;
    
    constructor(private organizationService: OrganizationsService,
                private router: Router) {
    }
    details() {
        this.router.navigate(['menu', 'projects', this.project.id])
    }
}