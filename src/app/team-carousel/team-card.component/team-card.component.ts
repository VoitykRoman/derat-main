import { Component, Input } from '@angular/core';
import { TeamCard } from 'src/app/models/team-card.model';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: 'app-main-team-card',
    templateUrl: './team-card.component.html',
    styleUrls: ['./team-card.component.css']
})

export class TeamCardComponent{
@Input() teamCard: TeamCard;

/**
 *
 */
constructor(public translateService: TranslateService) {
    

}
}   