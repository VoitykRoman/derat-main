import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IgxFilterOptions, slideOutRight, slideInLeft } from 'igniteui-angular';
import { Base64Service } from 'src/app/shared/base64.service';
import { useAnimation } from '@angular/animations';
import { TeamCard } from 'src/app/models/team-card.model';
import { TeamMemberService } from 'src/app/services/team-memberservice';

@Component({
    selector: "app-team-member-list",
    styleUrls: ["./team-member-list.component.scss"],
    templateUrl: "./team-member-list.component.html"
})
export class TeamMemberListComponent implements OnInit {
    @Output() onCreate = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();
    newTeamMember = {
        name: '',
        age: undefined,
        position: '',
        phone: '',
        experience: '',
        imageUrl: ''
    }

    public searchTeamMember: string;
    public density = "comfortable";
    @Input() teamMembers: TeamCard[];
    selectedFile;
    page = 1;
    pageSize = 3;
    constructor(private teamMemberService: TeamMemberService,
        private base64Service: Base64Service) {
    }


    ngOnInit() {
    }

    createNewTeamMember() {

        this.teamMemberService.createTeamMember(this.newTeamMember).toPromise().then(() => {
            this.onCreate.emit();
        })
    }

    deleteTeamMember(id: number) {
        this.teamMemberService.deleteTeamMember(id).toPromise().then(() => {
           
        })
        this.onDelete.emit(id);
    }

    updateTeamMember(teamMember: TeamCard, event) {

        const teamMemberToUpdate = {
            id: teamMember.id,
            name: teamMember.name,
            age: teamMember.age,
            position: teamMember.position,
            phone: teamMember.phone,
            experience: teamMember.experience,
            imageUrl: teamMember.imageUrl
        }

        this.teamMemberService.updateTeamMember(teamMemberToUpdate).toPromise().then(() => {
            event.dialog.close();
        })
    }

    onFileChanged(event, teamMember: TeamCard) {
        this.selectedFile = event.target.files[0];
        let u = URL.createObjectURL(this.selectedFile);
        this.base64Service.toDataURL(u)
            .then(dataUrl => {
                teamMember.imageUrl = <string>dataUrl;
            })
    }

    onNewFileChanged(event) {
        this.selectedFile = event.target.files[0];
        let u = URL.createObjectURL(this.selectedFile);
        this.base64Service.toDataURL(u)
            .then(dataUrl => {
                this.newTeamMember.imageUrl = <string>dataUrl;
            })
    }

    get filterLicenses() {
        const fo = new IgxFilterOptions();
        fo.key = "title";
        fo.inputValue = this.searchTeamMember;
        return fo;
    }

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: "100ms",
                toPosition: "translateX(25px)"
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: "500ms",
                fromPosition: "translateX(-15px)",
                startOpacity: 0.1
            }
        })
    };
}