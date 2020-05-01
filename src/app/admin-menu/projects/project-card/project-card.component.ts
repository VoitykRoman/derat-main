import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { ProjectStatuses } from 'src/app/shared/project-statuses.enum';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-project-card",
    styleUrls: ["./project-card.component.scss"],
    templateUrl: "./project-card.component.html"
})

export class ProjectCardComponent implements OnInit {

    @Input() project: Project;
    @Input() projects: Project[];
    @Output() onDelete = new EventEmitter<number>();
    constructor(private projectService: ProjectsService,
        private router: Router,
        private authenticationService: AuthenticationService,
        public translateService: TranslateService ) {
    }

    ngOnInit() {

    }
    openDetails() {
        this.router.navigate(['menu', 'projects', this.project.id]);
    }
    changeProjectStatusToPending() {
        this.projectService.changeProjectStatus(this.project.id, "pending").toPromise().then(() => {
            this.projects.filter(e => e.id == this.project.id)[0].status = ProjectStatuses.Pending
        });
    }
    changeProjectStatusToActive() {
        this.projectService.changeProjectStatus(this.project.id, "active").toPromise().then(() => {
            this.projects.filter(e => e.id == this.project.id)[0].status = ProjectStatuses.Active
        });
    }
    changeProjectStatusToDone() {
        this.projectService.changeProjectStatus(this.project.id, "done").toPromise().then(() => {
            this.projects.filter(e => e.id == this.project.id)[0].status = ProjectStatuses.Done
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
        })
        this.onDelete.emit(this.project.id);
    }
    
}