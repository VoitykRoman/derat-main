import { Component, OnInit } from '@angular/core';
import { IndexImageService } from 'src/app/services/index-image.service';
import { IndexImage } from 'src/app/models/index-image.model';
import { LicenseService } from 'src/app/services/license.service';
import { LicenseCard } from 'src/app/models/license-card.model';
import { TeamMemberService } from 'src/app/services/team-memberservice';
import { TeamCard } from 'src/app/models/team-card.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
    selector: "app-media-menu",
    styleUrls: ["./media-menu.component.scss"],
    templateUrl: "./media-menu.component.html"
})
export class MediaMenuComponent implements OnInit {

    indexImages: IndexImage[];
    licenses: LicenseCard[];
    teamMembers: TeamCard[];
    loading = true;
    constructor(private indexImageService: IndexImageService,
        private licenseService: LicenseService,
        private teamMemberService: TeamMemberService,
        private authenticationService: AuthenticationService,
        public translateService: TranslateService ) {

    }

    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin';
    }
    ngOnInit() {
      this.downloadData();
    }
    downloadData() {
        this.indexImageService.getImages().toPromise().then((e: IndexImage[]) => {
            this.indexImages = e;
        })
        this.licenseService.getLicenses().toPromise().then((e: LicenseCard[]) => {
            this.licenses = e;
        })
        this.teamMemberService.getTeamMembers().toPromise().then((e: TeamCard[]) => {
            this.teamMembers = e;
            this.loading = false;
        })
    }
    onCreate(){
        this.loading= true;
      this.downloadData();
    }
    onImageDelete(id){
        this.indexImages =  this.indexImages.filter(e => e.id != id);
    }

    onLicenseDelete(id){
        this.licenses =  this.licenses.filter(e => e.id != id);
    }

    onTeamDelete(id){
        this.teamMembers =  this.teamMembers.filter(e => e.id != id);
    }
}