import { Organization } from './organization.model';
import { Perimeter } from './Perimeter.model';

export class Facility{
    id: number;
    createdBy: string;
    createdAt: Date;
    name: string;
    address: string;
    perimeters: Perimeter[];
    organization: Organization;
}