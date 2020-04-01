import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { ProjectsService } from 'src/app/admin-menu/services/projects.service';

@Component({
    selector: "app-employee-card",
    styleUrls: ["./employee-card.component.scss"],
    templateUrl: "./employee-card.component.html"
})

export class EmployeeCardComponent {
    @Input() employee: User;
    @Input() projectId: number;

    constructor(private projectService: ProjectsService) {
    }
    removeEmployee() {
        this.projectService.removeEmployeeFromProject(this.employee.id, this.projectId).subscribe(e => {

        });
    }
}