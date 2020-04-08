import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/service-card.model';
import { Router } from '@angular/router';

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
    constructor(private router: Router) {
    }

    handleClick() {
        const id = this.card.title =='Deratization' 
        ? 0 
        :  this.card.title =='Disinsection'
        ? 1
        : this.card.title =='Deodorization'
        ? 2
        : 3;
        this.router.navigate(['/services'],
            {
                queryParams: {
                    service: id
                }
            });
    }
}