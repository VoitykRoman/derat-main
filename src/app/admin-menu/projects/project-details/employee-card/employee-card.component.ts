import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { ProjectsService } from 'src/app/admin-menu/services/projects.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-employee-card",
    styleUrls: ["./employee-card.component.scss"],
    templateUrl: "./employee-card.component.html"
})

export class EmployeeCardComponent implements OnInit{
    @Input() employee: User;
    @Input() projectId: number;
    @Output() onDelete = new EventEmitter<any>();
    initials;
    constructor(private projectService: ProjectsService,
        private authenticationService: AuthenticationService,
        public translateService: TranslateService ) {
    }

    ngOnInit() {
        const first = this.employee.firstName[0].toUpperCase();
        const second = this.employee.lastName[0].toUpperCase();
        this.initials = first + second;
    }
    
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

    removeEmployee() {
        this.projectService.removeEmployeeFromProject(this.employee.id, this.projectId).toPromise().then(e => {
          
        });
        this.onDelete.emit();
    }
}