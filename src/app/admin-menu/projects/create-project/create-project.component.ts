import { Component, Pipe, PipeTransform, Output } from "@angular/core";
import { Base64Service } from 'src/app/shared/base64.service';
import { IComboSelectionChangeEventArgs, IgxToastPosition } from "igniteui-angular";
import { Organization } from '../../models/organization.model';
import { User } from 'src/app/main/models/user.model';
import { OrganizationsService } from '../../services/organizations.service';
import { UserService } from 'src/app/main/services/user.service';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { EventEmitter } from 'protractor';

@Component({
    selector: "app-create-project",
    styleUrls: ["./create-project.component.scss"],
    templateUrl: "./create-project.component.html"
})
export class CreateProjectComponent {
    project = {
        name: undefined,
        services: undefined,
        organizationId: undefined,
        employees: undefined,
        avatarUrl: undefined
    };
    selectedFile: File
    success;
    services;
    organizationsEntities: Organization[];
    organizations;
    organizationSelected: string;
    employees: User[];
    employeesToShow;
    organizationsE: Organization[];
    constructor(private base64Service: Base64Service,
        private organizationsService: OrganizationsService,
        private userService: UserService,
        private projectService: ProjectsService,
        private router: Router,
        private authenticationService: AuthenticationService) {

        organizationsService.getAllOrganizations(this.authenticationService.currentUserValue.id).subscribe((o: Organization[]) => {
            this.organizations = o.map(e => {
                if (e.projects.length == 0)
                    return { organization: e.name }
            }).filter(e => e != undefined);
            this.organizationsEntities = o;
        });
        userService.getAllEmployee().subscribe((e: User[]) => {
            this.employees = e;
            this.employeesToShow = this.employees.map(e => {
                return { employee: e.firstName + " " + e.lastName + " " + e.id }
            });
        });

        this.services = [
            { service: "Deratization" },
            { service: "Disinsection" },
            { service: "Deodorization" },
            { service: "Disinfection" }
        ];
    }
    toastPosition: IgxToastPosition;

    onSubmit() {
        this.project.services = this.project.services.join();
        this.project.organizationId = this.organizationsEntities
            .filter(e => e.name == this.organizationSelected[0]).map(w => w.id)[0];

        let employeesIds: number[] = [];
        if (this.project.employees)
            this.project.employees.forEach(e => {
                employeesIds.push(+e.split(" ")[2])
            })
        this.project.employees = employeesIds;
        this.toastPosition = IgxToastPosition.Middle;

        this.projectService.createProject(this.project).toPromise().then(dd => {
            location.reload();
        });
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        let u = URL.createObjectURL(this.selectedFile);
        this.base64Service.toDataURL(u)
            .then(dataUrl => {
                this.project.avatarUrl = <string>dataUrl;
            })
    }
    public setWeaponsLimit(event: IComboSelectionChangeEventArgs) {
        if (event.newSelection.length > 1) {
            event.cancel = true;
        }
    }
}

@Pipe({ name: "startsWith" })
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = "") {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}