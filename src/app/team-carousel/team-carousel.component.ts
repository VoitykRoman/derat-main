import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TeamCard } from '../models/team-card.model';
import { TeamMemberService } from '../services/team-memberservice';

@Component({
    selector: 'app-main-team-carousel',
    templateUrl: './team-carousel.component.html',
    styleUrls: ['./team-carousel.component.css'],
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class TeamCarouselComponent implements OnInit {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    teamCards: TeamCard[]
    loading = true;
    constructor(private teamMembersService: TeamMemberService) {
    }

    ngOnInit() {
        this.teamMembersService.getTeamMembers().toPromise().then((img: TeamCard[]) => {
            this.teamCards = img;
            this.loading = false;
        })
    }

}