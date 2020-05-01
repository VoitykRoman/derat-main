import { Component, Input } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceCalculator } from 'src/app/models/service-calculator.model';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: 'app-main-price-calculator',
    templateUrl: './price-calculator.component.html',
    styleUrls: ['./price-calculator.component.css']
})

export class PriceCalculatorComponent {
    @Input() serviceCalculator: ServiceCalculator;
    area: number;
    price: number = 0;
    /**
     *
     */
    constructor(public translateService: TranslateService) {
    
        
    }
    calculatePrice(e: any) {
        this.area = Math.abs(this.area);
        this.price = e.target.value * this.serviceCalculator.perMetr + this.serviceCalculator.initialValue;
    }
}   