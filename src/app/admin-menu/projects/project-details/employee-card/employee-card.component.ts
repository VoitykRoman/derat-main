import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { ProjectsService } from 'src/app/admin-menu/services/projects.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-employee-card",
    styleUrls: ["./employee-card.component.scss"],
    templateUrl: "./employee-card.component.html"
})

export class EmployeeCardComponent {
    @Input() employee: User;
    @Input() projectId: number;

    constructor(private projectService: ProjectsService,
        private authenticationService:AuthenticationService) {
    }

    isAdmin(){
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient(){
        return this.authenticationService.currentUserValue.role == 'client'
    }

    removeEmployee() {
        this.projectService.removeEmployeeFromProject(this.employee.id, this.projectId).subscribe(e => {
            
        });
    }
}