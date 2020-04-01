import { Component } from "@angular/core";
import { Project } from '../models/project.model';
import { ProjectStatuses } from 'src/app/shared/project-statuses.enum';
import { ProjectsService } from '../services/projects.service';
import { OrganizationsService } from '../services/organizations.service';
import { Organization } from '../models/organization.model';
import { Services } from 'src/app/shared/services.enum';
import { User } from 'src/app/main/models/user.model';
import { UserService } from 'src/app/main/services/user.service';

@Component({
    selector: "app-projects",
    styleUrls: ["./projects.component.scss"],
    templateUrl: "./projects.component.html"
})
export class ProjectsComponent {
    projects: Project[];
    activeProjects;
    pendingProjects;
    doneProjects;

    organizations: Organization[];

    employees: User[];

    services = [
        Services.Deodorization,
        Services.Deratization,
        Services.Disinfection,
        Services.Disinsection
    ]
    constructor(private projectService: ProjectsService,
        private organizationsService: OrganizationsService,
        private userService: UserService) {
        projectService.getAllProjects().subscribe((p: Project[]) => {
            this.projects = p;
            this.activeProjects = this.projects.filter(p => p.status == ProjectStatuses.Active)
            this.pendingProjects = this.projects.filter(p => p.status == ProjectStatuses.Pending)
            this.doneProjects = this.projects.filter(p => p.status == ProjectStatuses.Done)
           
        });
    }

    changeProjectStatus(id: number) {
        this.projectService.changeProjectStatus(id, "active").subscribe(e => {

        });
    }


    activePage = 1;
    pendingPage = 1;
    donePage = 1;
    pageSize = 3;

    get activePagination(): Project[] {
        return this.activeProjects
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.activePage - 1) * this.pageSize, (this.activePage - 1) * this.pageSize + this.pageSize);
    }

    get pendingPagination(): Project[] {
        return this.pendingProjects
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.pendingPage - 1) * this.pageSize, (this.pendingPage - 1) * this.pageSize + this.pageSize);
    }

    get donePagination(): Project[] {
        return this.doneProjects
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.donePage - 1) * this.pageSize, (this.donePage - 1) * this.pageSize + this.pageSize);
    }
}
