import { Project } from './project.model';

export class Event{
    id: number;
    createdBy: string;
    createdAt: Date;
    eventText: string;
    project: Project;
}