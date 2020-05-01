import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/main/services/user.service';
import { User } from 'src/app/main/models/user.model';
import { ProjectsService } from 'src/app/admin-menu/services/projects.service';
import { EmployeeProject, Project } from 'src/app/admin-menu/models/project.model';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-add-employee",
    templateUrl: "./add-employee.component.html"
})

export class AddEmployeeComponent implements OnInit {
    employeesToAdd;
    employees;
    employeesToShow;

    projectEmployeesIds: number[];
    project: Project;
    users: User[];

    @Output() onCreate = new EventEmitter<any>();
    constructor(private userService: UserService,
        private projectService: ProjectsService,
        private route: ActivatedRoute,
        public translateService: TranslateService ) {
    }

    ngOnInit() {
        const projectId = +this.route.snapshot.paramMap.get('id');
        this.projectService.getProjectById(projectId).subscribe((e: Project) => {
            const stamp = e;
            this.project = stamp;

            console.log('project');
            this.projectEmployeesIds = this.project.employeesLnk.map((e) => {
                const bb = e;
                console.log('empId');
                return e.employeeId;
            });
        }).add(e => {
            this.userService.getAllEmployee().subscribe((data: User[]) => {
                this.users = data;
                this.employees = this.users.filter((e: User) => {
                    if (!this.projectEmployeesIds.includes(e.id))
                        return e;
                });
                this.employeesToShow = this.employees.map(e => {
                    return { employee: e.firstName + " " + e.lastName + " " + e.id }
                });
            });
        });
    }
    onSubmit() {
        let employeesIds: number[] = [];
        this.employeesToAdd.forEach(e => {
            employeesIds.push(+e.split(" ")[2])
        });
        const body = {
            employeesIds,
            projectId: this.project.id
        }
        this.projectService.addEmployeesToProject(body).toPromise().then(() => {
            this.callEmit();
        });

    }

    callEmit() {
        this.onCreate.emit();
    }
}