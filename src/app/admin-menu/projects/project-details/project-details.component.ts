import { Component } from '@angular/core';
import { Project, EmployeeProject } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/main/models/user.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-project-details",
    styleUrls: ["./project-details.component.scss"],
    templateUrl: "./project-details.component.html"
})
export class ProjectsDetailsComponent {
    project: Project;
    public density = "comfortable";
    page = 1;
    pageSize = 2;
    employees: User[];
    ePage = 1;
    constructor(private projectsService: ProjectsService,
        private route: ActivatedRoute,
        private router: Router,
        public authenticationService:AuthenticationService) {
        const projectId = +this.route.snapshot.paramMap.get('id');
        projectsService.getProjectById(projectId).subscribe((e: Project) => {
            this.project = e;
            this.employees = this.project.employeesLnk.map((e: EmployeeProject) => e.employee);
        })
    }

    isAdmin(){
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient(){
        return this.authenticationService.currentUserValue.role == 'client'
    }

    get events(): Event[] {
        return this.project.events
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    get employeesPagination(): User[] {
        return this.employees
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.ePage - 1) * this.pageSize, (this.ePage - 1) * this.pageSize + this.pageSize);
    }

    goToOrganization() {
        this.router.navigate(['menu', 'organizations', this.project.organization.id]);
    }
}