import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { ProjectsService } from 'src/app/admin-menu/services/projects.service';
import { OrganizationsService } from 'src/app/admin-menu/services/organizations.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-client-card",
    templateUrl: "./client-card.component.html"
})

export class ClientCardComponent implements OnInit {
    @Input() client: User;
    @Input() organizationId: number;
    @Output() onDelete = new EventEmitter<any>(); 
    initials: string;
    constructor(private organizationServce: OrganizationsService,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
      this.downloadData();
    }

    downloadData(){
        const first = this.client.firstName[0].toUpperCase();
        const second = this.client.lastName[0].toUpperCase();
        this.initials = first + second;
    }


    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }
    removeClient() {
        this.organizationServce.removeClient(this.client.id, this.organizationId).toPromise().then(e => {
           
        });
        this.onDelete.emit(this.client.id);
    }
}