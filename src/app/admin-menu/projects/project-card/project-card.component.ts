import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-project-card",
    styleUrls: ["./project-card.component.scss"],
    templateUrl: "./project-card.component.html"
})

export class ProjectCardComponent implements OnInit {

    @Input() project: Project;

    constructor(private projectService: ProjectsService,
        private router: Router,
        private authenticationService: AuthenticationService) {
    }
    ngOnInit() {

    }
    openDetails() {
        this.router.navigate(['menu', 'projects', this.project.id]);
    }
    changeProjectStatusToPending() {
        this.projectService.changeProjectStatus(this.project.id, "pending").toPromise().then(() => {
            location.reload();
        });
    }
    changeProjectStatusToActive() {
        this.projectService.changeProjectStatus(this.project.id, "active").toPromise().then(() => {
            location.reload();
        });
    }
    changeProjectStatusToDone() {
        this.projectService.changeProjectStatus(this.project.id, "done").toPromise().then(() => {
            location.reload();
        });
    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

    delete() {
        this.projectService.deleteProject(this.project.id).toPromise().then(() => {
            location.reload();
        })

    }
}