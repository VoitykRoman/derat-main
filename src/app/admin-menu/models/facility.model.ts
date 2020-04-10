import { Organization } from './organization.model';
import { Perimeter } from './perimeter.model';

export class Facility{
    id: number;
    createdBy: string;
    createdAt: Date;
    name: string;
    address: string;
    perimeters: Perimeter[];
    organization: Organization;
}