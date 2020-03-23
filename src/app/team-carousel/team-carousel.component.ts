import { Component } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TeamCard } from '../models/team-card.model';
import { TeamMemberService } from '../services/team-memberservice';

@Component({
    selector: 'app-main-team-carousel',
    templateUrl: './team-carousel.component.html',
    styleUrls: ['./team-carousel.component.css'],
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class TeamCarouselComponent {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    teamCards: TeamCard[] 
    // = [new TeamCard({
    //     name: 'Roman Voityk',
    //     position: 'Director',
    //     age: 20,
    //     phone: '0732202576',
    //     experience: 1,
    //     avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/card/avatars/photographer.jpg',
    //     imageUrl: 'assets/6.jpg'
    // }), new TeamCard({
    //     name: 'Taras Grybyk',
    //     position: 'Director',
    //     age: 20,
    //     phone: '0732202576',
    //     experience: 1,
    //     avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/card/avatars/photographer.jpg',
    //     imageUrl: 'assets/6.jpg'
    // })]

    /**
     *
     */
    constructor(private teamMembersService: TeamMemberService) {
        this.teamMembersService.getTeamMembers().subscribe((img: TeamCard[]) => {
            this.teamCards = img;
        })    
    }
}