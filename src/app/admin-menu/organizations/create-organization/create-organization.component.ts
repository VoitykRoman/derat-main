import { Component } from '@angular/core';
import { Base64Service } from 'src/app/shared/base64.service';
import { OrganizationsService } from '../../services/organizations.service';
import { UserService } from 'src/app/main/services/user.service';
import { User } from 'src/app/main/models/user.model';

@Component({
    selector: "app-create-organization",
    styleUrls: ["./create-organization.component.scss"],
    templateUrl: "./create-organization.component.html"
})

export class CreateOrganizationComponent {

    organization = {
        name: undefined,
        clients: undefined,
        avatarUrl: undefined
    }
    clients: User[];
    clientsToShow;
    selectedFile: File

    constructor(private base64Service: Base64Service,
        private organizationsService: OrganizationsService,
        private userService: UserService) {
        userService.getAllClients().subscribe((e: User[]) => {
            this.clients = e;
            this.clientsToShow = this.clients.map(e => {
                return { client: e.firstName + " " + e.lastName + " " + e.id }
            });
        });
    }

    onSubmit() {
        if (this.organization.clients != undefined) {
            let employeesIds: number[] = [];
            this.organization.clients.forEach(e => {
                employeesIds.push(+e.split(" ")[2])
            })
            this.organization.clients = employeesIds;
        }
        else {
            this.organization.clients = [];
        }
        this.organizationsService.createOrganization(this.organization).subscribe(dd => {

        });
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        let u = URL.createObjectURL(this.selectedFile);
        this.base64Service.toDataURL(u)
            .then(dataUrl => {
                this.organization.avatarUrl = <string>dataUrl;
            })
    }

}