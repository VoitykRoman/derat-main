import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Facility } from '../../models/facility.model';
import { IComboSelectionChangeEventArgs } from 'igniteui-angular';
import { Project, EmployeeProject } from '../../models/project.model';
import { User } from 'src/app/main/models/user.model';
import { UserService } from 'src/app/main/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FacilityService } from '../../services/facility.service';
import { PerimeterService } from '../../services/perimeters.service';

@Component({
    selector: "app-add-perimeter",
    templateUrl: "./add-perimeter.component.html"
})
export class AddPerimeterComponent implements OnInit {

    @Input() facility: Facility;
@Output() onCreate = new EventEmitter<any>();
    types = [
        {
            type: 'inner'
        },
        {
            type: 'outer'
        }
    ];

    selectedType;

    serviceSelected;
    services;
    employeesToShow;
    selectedEmployee;
    employees: User[];
    selectedName;
    constructor(private userSerivce: UserService,
        private route: ActivatedRoute,
        private facilityService: FacilityService,
        private perimeterService: PerimeterService) {
    }

    ngOnInit() {
        // if (this.facility.organization.projects && this.facility.organization.projects.filter((p: Project) => p.organizationId == this.facility.organization.id)[0] != undefined)
            this.employees = this.facility.organization.projects.filter((p: Project) => p.organizationId == this.facility.organization.id)[0].employeesLnk
                .map((emp: EmployeeProject) => {
                    return emp.employee
                });

        // if (this.employees)
            this.employeesToShow = this.employees.map(e => {
                return { employee: e.firstName + " " + e.lastName + " " + e.id }
            })

        // if (this.facility.organization.projects
        //     .filter((e: Project) => e.organizationId == this.facility.organization.id)[0] != undefined) {
            const services = this.facility.organization.projects
                .filter((e: Project) => e.organizationId == this.facility.organization.id)[0].services.split(',');

            this.services = services.map(e => {
                return {
                    service: e
                }
            });
        // }
    }
    onSubmit() {
        let employeesIds: number[] = [];
        this.selectedEmployee.forEach(e => {
            employeesIds.push(+e.split(" ")[2])
        });

        const perimeter = {
            name: this.selectedName,
            type: this.selectedType[0],
            employeeId: employeesIds[0],
            service: this.serviceSelected[0],
            facilityId: this.facility.id
        }

        this.perimeterService.createPerimeter(perimeter).toPromise().then(e => {
            this.onCreate.emit();
        })
    }
    public setWeaponsLimit(event: IComboSelectionChangeEventArgs) {
        if (event.newSelection.length > 1) {
            event.cancel = true;
        }
    }
}