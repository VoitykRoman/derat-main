import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';
import { ProjectStatuses } from 'src/app/shared/project-statuses.enum';

@Component({
    selector: "app-project-card",
    styleUrls: ["./project-card.component.scss"],
    templateUrl: "./project-card.component.html"
})

export class ProjectCardComponent implements OnInit {

    @Input() project: Project;

    constructor(private projectService: ProjectsService,
                private router: Router) {
    }
    ngOnInit(){

}
    openDetails(){
        this.router.navigate(['admin', 'projects', this.project.id]);
    }
    changeProjectStatusToPending() {
        this.projectService.changeProjectStatus(this.project.id, "pending").subscribe(e => {
        });
    }
    changeProjectStatusToActive() {
        this.projectService.changeProjectStatus(this.project.id, "active").subscribe(e => {
        });
    }
    changeProjectStatusToDone() {
        this.projectService.changeProjectStatus(this.project.id, "done").subscribe(e => {
        });
    }

}