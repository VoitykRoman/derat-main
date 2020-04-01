import { Component } from '@angular/core';
import { Project, EmployeeProject } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/main/models/user.model';

@Component({
    selector: "app-project-details",
    styleUrls: ["./project-details.component.scss"],
    templateUrl: "./project-details.component.html"
})
export class ProjectsDetailsComponent  {
     project:Project;
     public density = "comfortable";
     page = 1;
     pageSize = 2;
    employees:User[];
    ePage =1;
    constructor(private projectsService: ProjectsService,
                private route: ActivatedRoute) {
            const projectId = +this.route.snapshot.paramMap.get('id');
            projectsService.getProjectById(projectId).subscribe((e:Project) => {
                this.project = e;
                this.employees = this.project.employeesLnk.map((e: EmployeeProject) => e.employee);
            })
    }

    get events(): Event[] {
        return this.project.events
          .map((feedback, i) => ({id: i + 1, ...feedback}))
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      }

      get employeesPagination(): User[] {
        return this.employees
          .map((feedback, i) => ({id: i + 1, ...feedback}))
          .slice((this.ePage - 1) * this.pageSize, (this.ePage - 1) * this.pageSize + this.pageSize);
      }
}