import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { OrganizationsService } from 'src/app/admin-menu/services/organizations.service';
import { Organization } from 'src/app/admin-menu/models/organization.model';
import { User } from 'src/app/main/models/user.model';
import { UserService } from 'src/app/main/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-add-client",
    templateUrl: "./add-client.component.html"
})

export class AddClientComponent implements OnInit {

    clientsToAdd;
    clients;
    clientsToShow;

    organizationClientsIds: number[];

    organization: Organization;
    users: User[];

    @Output() onCreate = new EventEmitter<any>();
    constructor(private organizationService: OrganizationsService,
        private userService: UserService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.downloadData();
    }

    downloadData() {
        const organizationId = +this.route.snapshot.paramMap.get('id');
        const orgPromise = this.organizationService.getOrganizationById(organizationId).toPromise();
        orgPromise.then((e: Organization) => {
            this.organization = e;
            const clientsProm = this.userService.getAllClients().toPromise();
            clientsProm.then((users: User[]) => {
                this.organizationClientsIds = this.organization.clients.map((e) => {
                    return e.id;
                });

                this.clients = users.filter((e: User) => {
                    if (!this.organizationClientsIds.includes(e.id))
                        return e;
                });
                this.clientsToShow = this.clients.map(e => {
                    return { client: e.firstName + " " + e.lastName + " " + e.id }
                });
            });
        });
    }
    onSubmit() {
        let clientsIds: number[] = [];
        this.clientsToAdd.forEach(e => {
            clientsIds.push(+e.split(" ")[2])
        });
        const body = {
            clientsIds,
            organizationId: this.organization.id
        }
        this.organizationService.addClient(body).toPromise().then(e => {
            this.onCreate.emit();
        });
    }
}