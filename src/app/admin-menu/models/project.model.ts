import { Organization } from './organization.model';
import { User } from 'src/app/main/models/user.model';
import { ProjectStatuses } from 'src/app/shared/project-statuses.enum';

export class Project {
    id: number;
    createdBy: string;
    createdAt: Date;
    name: string;
    status: ProjectStatuses;
    avatarUrl: string;
    organization: Organization;
    employeesLnk: EmployeeProject[];
    services: string;
    organizationId: number;
    events: Event[];
}

export class EmployeeProject {
    employeeId: number;
    employee: User;
    projectId: number;
    project: Project;
}