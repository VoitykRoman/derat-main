import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Facility } from '../../models/facility.model';
import { IComboSelectionChangeEventArgs } from 'igniteui-angular';
import { Project, EmployeeProject } from '../../models/project.model';
import { User } from 'src/app/main/models/user.model';
import { UserService } from 'src/app/main/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FacilityService } from '../../services/facility.service';
import { PerimeterService } from '../../services/perimeters.service';
import { TranslateService } from 'src/app/services/translate.service';

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
    typesUa = [
        {
            type: 'внутрішній'
        },
        {
            type: 'зовнішній'
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
        private perimeterService: PerimeterService,
        public translateService: TranslateService) {
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
    getServices() {
        let result;
        if (this.translateService.language == 'ua') {
            result = this.services.map(e => {
                let ser;
                if (e.service.includes('Deratization'))
                    return { service: e.service.replace('Deratization', 'Дератизація') }

                 if (e.service.includes('Disinsection'))
                    return {
                        service: e.service.replace('Disinsection', 'Дезінсекція')
                    }

                 if (e.service.includes('Deodorization'))
                    return {
                        service: e.service.replace('Deodorization', 'Деодорація')
                    }

                if (e.service.includes('Disinfection'))
                    return {
                        service: e.service.replace('Disinfection', 'Дезінфекція')
                    }
                    if (e.service.includes('Дератизація'))
                    return {
                        service: e.service.replace('Дератизація', 'Дератизація')
                    }
                    if (e.service.includes('Дезінсекція'))
                    return {
                        service: e.service.replace('Дезінсекція', 'Дезінсекція')
                    }
                    if (e.service.includes('Деодорація'))
                    return {
                        service: e.service.replace('Деодорація', 'Деодорація')
                    }
                    if (e.service.includes('Дезінфекція'))
                    return {
                        service: e.service.replace('Дезінфекція', 'Дезінфекція')
                    }
                

            })
            return result;
        }
        if (this.translateService.language == 'en') {
            result = this.services.map(e => {
                let ser;
                if (e.service.includes('Дератизація'))
                    return { service: e.service.replace('Дератизація', 'Deratization') }

                if (e.service.includes('Дезінсекція'))
                    return {
                        service: e.service.replace('Дезінсекція', 'Disinsection')
                    }

                if (e.service.includes('Деодорація'))
                    return {
                        service: e.service.replace('Деодорація', 'Deodorization')
                    }

                if (e.service.includes('Дезінфекція'))
                    return {
                        service: e.service.replace('Дезінфекція', 'Disinfection')
                    }

                    if (e.service.includes('Deratization'))
                    return {
                        service: e.service.replace('Deratization', 'Deratization')
                    }
                    if (e.service.includes('Disinsection'))
                    return {
                        service: e.service.replace('Disinsection', 'Disinsection')
                    }
                    if (e.service.includes('Deodorization'))
                    return {
                        service: e.service.replace('Deodorization', 'Deodorization')
                    }
                    if (e.service.includes('Disinfection'))
                    return {
                        service: e.service.replace('Disinfection', 'Disinfection')
                    }
            })
            return result;
        }

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