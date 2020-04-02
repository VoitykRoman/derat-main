import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { ProjectsService } from 'src/app/admin-menu/services/projects.service';
import { OrganizationsService } from 'src/app/admin-menu/services/organizations.service';

@Component({
    selector: "app-client-card",
    templateUrl: "./client-card.component.html"
})

export class ClientCardComponent {
    @Input() client: User;
    @Input() organizationId: number;

    constructor(private organizationServce: OrganizationsService) {
    }
    removeClient() {
        this.organizationServce.removeClient(this.client.id, this.organizationId).subscribe(e => {

        });
    }
}