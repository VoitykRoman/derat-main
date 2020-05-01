import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { Facility } from 'src/app/admin-menu/models/facility.model';
import { OrganizationsService } from 'src/app/admin-menu/services/organizations.service';
import { Organization } from 'src/app/admin-menu/models/organization.model';
import { Project } from 'src/app/admin-menu/models/project.model';
import { Router } from '@angular/router';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-projects-org-card",
    templateUrl: "./projects.component.html"
})

export class ProjectsOrgComponent {

    @Input() project: Project;

    constructor(private organizationService: OrganizationsService,
        private router: Router,
        public translateService: TranslateService) {
    }

    getServices() {
        if (this.translateService.language == 'ua') {
            let result = this.project.services.replace('Deratization', 'Дератизація');
            result = result.replace('Disinsection', 'Дезінсекція')
            result = result.replace('Deodorization', 'Деодорація')
            result = result.replace('Disinfection', 'Дезінфекція')
            return result;
        }
        if (this.translateService.language == 'en')
            return this.project.services
    }
    details() {
        this.router.navigate(['menu', 'projects', this.project.id])
    }
}