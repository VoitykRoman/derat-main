import { Component, OnInit } from "@angular/core";
import { Project } from '../models/project.model';
import { ProjectStatuses } from 'src/app/shared/project-statuses.enum';
import { ProjectsService } from '../services/projects.service';
import { OrganizationsService } from '../services/organizations.service';
import { Organization } from '../models/organization.model';
import { Services } from 'src/app/shared/services.enum';
import { User } from 'src/app/main/models/user.model';
import { UserService } from 'src/app/main/services/user.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { IgxFilterOptions } from 'igniteui-angular';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-projects",
    styleUrls: ["./projects.component.scss"],
    templateUrl: "./projects.component.html"
})
export class ProjectsComponent implements OnInit {
    projects: Project[];
    // activeProjects;
    // pendingProjects;
    // doneProjects;

    organizations: Organization[];

    employees: User[];

    services = [
        Services.Deodorization,
        Services.Deratization,
        Services.Disinfection,
        Services.Disinsection
    ]

    obs;
    searchActiveProject;
    searchPendingProject;
    searchDoneProject;
    loading = true;
    constructor(private projectService: ProjectsService,
        private authenticationService: AuthenticationService,
        public translateService: TranslateService) {
    }

    ngOnInit() {
        this.downloadProjects();
    }

    downloadProjects() {
        this.obs = this.projectService.getAllProjects(this.authenticationService.currentUserValue.id).toPromise();
        const promise = this.projectService.getAllProjects(this.authenticationService.currentUserValue.id).toPromise()
            .then((p: Project[]) => {
                this.projects = p;
                // this.activeProjects = this.projects.filter(p => p.status == ProjectStatuses.Active)
                // this.pendingProjects = this.projects.filter(p => p.status == ProjectStatuses.Pending)
                // this.doneProjects = this.projects.filter(p => p.status == ProjectStatuses.Done)
                this.loading = false;
            });
    }
    get activeProjects() {
        return this.projects.filter(p => p.status == ProjectStatuses.Active);
    }
    get pendingProjects() {
        return this.projects.filter(p => p.status == ProjectStatuses.Pending)
    }
    get doneProjects() {
        return this.projects.filter(p => p.status == ProjectStatuses.Done)
    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }



    get filterActiveProjects(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "name";
        fo.inputValue = this.searchActiveProject;
        return fo;
    }

    get filterPendingProjects(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "name";
        fo.inputValue = this.searchPendingProject;
        return fo;
    }

    get filterDoneProjects(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "name";
        fo.inputValue = this.searchDoneProject;
        return fo;
    }


    onDelete() {
        this.loading = true;
        this.downloadProjects();
    }

    onCreate(){
        this.loading = true;
        this.downloadProjects();
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
