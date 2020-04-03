import { Organization } from 'src/app/admin-menu/models/organization.model';
import { EmployeeProject } from 'src/app/admin-menu/models/project.model';
import { Trap } from 'src/app/admin-menu/models/trap.model';
import { Perimeter } from 'src/app/admin-menu/models/Perimeter.model';

export class User {
    id: number;
    createdBy: string;
    createdAt: Date;
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    phone: string;
    token: string;
    organization: Organization;
    projectsLnk: EmployeeProject[]
    traps: Trap[];
    perimeters: Perimeter[]
}