import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/service-card.model';

@Component({
    selector: 'app-main-service-card',
    templateUrl: './service-card.component.html',
    styleUrls: ['./service-card.component.css']
})

export class ServiceCardComponent{
@Input() card: Card;

handleClick(){
console.log();
}
}   