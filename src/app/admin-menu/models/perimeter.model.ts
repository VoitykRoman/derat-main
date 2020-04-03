import { Facility } from './facility.model';
import { User } from 'src/app/main/models/user.model';
import { Trap } from './trap.model';

export class Perimeter{
    id: number;
    createdBy: string;
    createdAt: Date;
    name: string;
    type: string;
    traps: Trap[];
    facility: Facility;
    employee: User;
    service: string;
    status: string;
    lastAction: Date;
}