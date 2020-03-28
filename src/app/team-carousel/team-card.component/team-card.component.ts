import { Component, Input } from '@angular/core';
import { TeamCard } from 'src/app/models/team-card.model';

@Component({
    selector: 'app-main-team-card',
    templateUrl: './team-card.component.html',
    styleUrls: ['./team-card.component.css']
})

export class TeamCardComponent{
@Input() teamCard: TeamCard;

nextCard(){
    
}
}   