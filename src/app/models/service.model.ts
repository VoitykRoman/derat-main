import { ServiceCalculator } from './service-calculator.model';

export class Service{
    title: string;
    description: string;
    instruction: string;
    imageUrl: string;
    links: string[];
    priceCalculator: ServiceCalculator[];
}
