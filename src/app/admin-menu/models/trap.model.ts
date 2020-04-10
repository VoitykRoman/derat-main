import { Perimeter } from './perimeter.model';
import { User } from 'src/app/main/models/user.model';

export class Trap{
    id: number;
    createdBy: string;
    createdAt: Date;
    type: string;
    status: string;
    endTime: Date;
    lastReviewTime: Date;
    nextReviewTime: Date;
    comment: string;
    place: string;
    perimeter: Perimeter;
    employee: User;
}