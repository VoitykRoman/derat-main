import { User } from 'src/app/main/models/user.model';
import { Project } from './project.model';
import { Facility } from './facility.model';

export class Organization{
    id: number;
    createdBy: string;
    createdAt: Date;
    name: string;
    facilities: Facility[];
    clients: User[];
    projects: Project[]
    avatarUrl: string;
}