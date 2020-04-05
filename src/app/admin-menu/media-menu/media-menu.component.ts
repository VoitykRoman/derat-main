import { Component, OnInit } from '@angular/core';
import { IndexImageService } from 'src/app/services/index-image.service';
import { IndexImage } from 'src/app/models/index-image.model';
import { LicenseService } from 'src/app/services/license.service';
import { LicenseCard } from 'src/app/models/license-card.model';
import { TeamMemberService } from 'src/app/services/team-memberservice';
import { TeamCard } from 'src/app/models/team-card.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-media-menu",
    styleUrls: ["./media-menu.component.scss"],
    templateUrl: "./media-menu.component.html"
})
export class MediaMenuComponent implements OnInit {

    indexImages: IndexImage[];
    licenses: LicenseCard[];
    teamMembers: TeamCard[];
    constructor(private indexImageService: IndexImageService,
        private licenseService: LicenseService,
        private teamMemberService: TeamMemberService,
        private authenticationService: AuthenticationService) {

    }

    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin';
    }
    ngOnInit() {
        this.indexImageService.getImages().toPromise().then((e: IndexImage[]) => {
            this.indexImages = e;
        })
        this.licenseService.getLicenses().toPromise().then((e: LicenseCard[]) => {
            this.licenses = e;
        })
        this.teamMemberService.getTeamMembers().toPromise().then((e: TeamCard[]) => {
            this.teamMembers = e;
        })
    }
}