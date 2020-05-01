import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/service-card.model';
import { Router } from '@angular/router';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: 'app-main-service-card',
    templateUrl: './service-card.component.html',
    styleUrls: ['./service-card.component.css']
})

export class ServiceCardComponent {
    @Input() card: Card;


    /**
     *
     */
    constructor(private router: Router, public translateService: TranslateService) {
    }

    handleClick() {
        let id;
        if (this.translateService.language == "en") {
             id = this.card.title == 'Deratization'
                ? 0
                : this.card.title == 'Disinsection'
                    ? 1
                    : this.card.title == 'Deodorization'
                        ? 2
                        : 3;
        }
        else if (this.translateService.language == "ua") {
             id = this.card.title == 'Дератизація'
            ? 0
            : this.card.title == 'Дезінсекція'
                ? 1
                : this.card.title == 'Деодорація'
                    ? 2
                    : 3;
        }
        this.router.navigate(['/services'],
            {
                queryParams: {
                    service: id
                }
            });
    }
}