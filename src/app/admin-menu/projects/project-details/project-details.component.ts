import { Component, OnInit } from '@angular/core';
import { Project, EmployeeProject } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/main/models/user.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { TranslateService } from 'src/app/services/translate.service';
@Component({
    selector: "app-project-details",
    styleUrls: ["./project-details.component.scss"],
    templateUrl: "./project-details.component.html"
})
export class ProjectsDetailsComponent implements OnInit {
    project: Project;
    public density = "comfortable";
    page = 1;
    pageSize = 2;
    employees: User[];
    ePage = 1;
    evPageSize = 4;
    loading = true;
    constructor(private projectsService: ProjectsService,
        private route: ActivatedRoute,
        private router: Router,
        public authenticationService: AuthenticationService,
        public translateService: TranslateService) {
    }

    ngOnInit() {
        this.dowloadData();
    }

    dowloadData() {
        const projectId = +this.route.snapshot.paramMap.get('id');
        this.projectsService.getProjectById(projectId).subscribe((e: Project) => {
            this.project = e;
            this.employees = this.project.employeesLnk.map((e: EmployeeProject) => e.employee);
            this.project.events.reverse();
            this.loading = false;
        })
    }

    onEvent() {
        this.loading = true;
        this.dowloadData();
    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

    get events() {
        if (this.translateService.language == 'ua') {
            this.project.events.forEach((e) => {
                e.eventText = e.eventText.replace('The employee', 'Працівник')
                e.eventText = e.eventText.replace('has been added to project at', 'був доданий до проекту о')
                e.eventText = e.eventText.replace('has been removed from project at', 'був вилучений з проекту о')
                e.eventText = e.eventText.replace('The status of the project has been changed to done at', 'Статус проекту був змінений до завершеного о')
                e.eventText = e.eventText.replace('The status of the project has been changed to active at', 'Статус проекту був змінений до активного о')
                e.eventText = e.eventText.replace('The status of the project has been changed to pending at', 'Статус проекту був змінений до очікуючого о')
                e.eventText = e.eventText.replace('Project has been created by', 'Проект був створений користувачем')
                e.eventText = e.eventText.replace('at', 'о')    
            }
            )
            return this.project.events
                .map((feedback, i) => ({ id: i + 1, ...feedback }))
                .slice((this.page - 1) * this.evPageSize, (this.page - 1) * this.evPageSize + this.evPageSize);
        }
        if (this.translateService.language == 'en') {
            this.project.events.forEach((e) => {
                e.eventText = e.eventText.replace('Працівник', 'The employee')
                e.eventText = e.eventText.replace('був доданий до проекту о', 'has been added to project at')
                e.eventText = e.eventText.replace('був вилучений з проекту о', 'has been removed from project at')
                e.eventText = e.eventText.replace('Статус проекту був змінений до завершеного о', 'The status of the project has been changed to done at')
                e.eventText = e.eventText.replace('Статус проекту був змінений до активного о', 'The status of the project has been changed to active at')
                e.eventText = e.eventText.replace('Статус проекту був змінений до очікуючого о', 'The status of the project has been changed to pending at')
                e.eventText = e.eventText.replace('Проект був створений користувачем', 'Project has been created by')  
                e.eventText = e.eventText.replace('о', 'at')    
            })
            return this.project.events
                .map((feedback, i) => ({ id: i + 1, ...feedback }))
                .slice((this.page - 1) * this.evPageSize, (this.page - 1) * this.evPageSize + this.evPageSize);
        }
    }

    get employeesPagination(): User[] {
        return this.employees
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.ePage - 1) * this.pageSize, (this.ePage - 1) * this.pageSize + this.pageSize);
    }

    goToOrganization() {
        this.router.navigate(['menu', 'organizations', this.project.organization.id]);
    }
}