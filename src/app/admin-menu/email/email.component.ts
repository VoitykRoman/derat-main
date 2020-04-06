import { ChangeDetectorRef, Component, ElementRef, ViewChild, PipeTransform, Pipe, OnInit } from "@angular/core";
import {
    ConnectedPositioningStrategy,
    IgxChipsAreaComponent,
    IgxDropDownComponent,
    IgxInputDirective,
    IgxInputGroupComponent,
    IgxInputState,
    IgxToastPosition
} from "igniteui-angular";
import { UserService } from 'src/app/main/services/user.service';
import { User } from 'src/app/main/models/user.model';
import { EmailService } from '../services/email.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-email",
    styleUrls: ["./email.component.scss"],
    templateUrl: "./email.component.html"
})

export class EmailComponent implements OnInit {

    public dropDownList = [
        {
            email: "lisalanders@gmail.com",
            id: 1,
            name: "Lisa Landers",
            photo: "https://www.infragistics.com/angular-demos/assets/images/women/3.jpg",
            role: 'admin',
            initials: 'LA'
        }
    ];

    public chipList = [
    ];

    public tagList = [
        { id: "All users", text: "All users" },
        { id: "All clients", text: "All clients" },
        { id: "All employees", text: "All employees" },
        { id: "All admins", text: "All admins" }
    ];

    public toastPosition: IgxToastPosition = IgxToastPosition.Middle;

    @ViewChild("chipsAreaCc", { read: IgxChipsAreaComponent, static: true })
    public chipsAreaCc: IgxChipsAreaComponent;

    @ViewChild("ccGroup", { read: IgxInputDirective, static: true })
    public ccGroup: IgxInputDirective;

    @ViewChild("textArea", { read: ElementRef, static: true })
    public textArea: ElementRef;

    @ViewChild("chipsArea", { read: IgxChipsAreaComponent, static: true })
    public chipsArea: IgxChipsAreaComponent;

    @ViewChild("inputForm", { read: IgxInputDirective, static: true })
    public inputBox: IgxInputDirective;

    @ViewChild(IgxDropDownComponent, { static: true })
    public igxDropDown: IgxDropDownComponent;

    @ViewChild("inputGroup", { read: IgxInputGroupComponent, static: true })
    public inputGroup: IgxInputGroupComponent;

    private dropDownOpened = false;

    constructor(public cdr: ChangeDetectorRef,
        private userService: UserService,
        private emailService: EmailService,
        private authenticationService: AuthenticationService) { }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }
    ngOnInit() {
        this.userService.getAll().toPromise().then((e: User[]) => {
            this.dropDownList = e.map((e: User) => {
                return {
                    email: e.email,
                    id: e.id,
                    name: e.firstName + " " + e.lastName,
                    photo: e.avatarUrl,
                    role: e.role,
                    initials: e.firstName[0].toUpperCase() + e.lastName[0].toUpperCase()
                }
            })
        })
    }
    public chipsOrderChanged(event) {
        const newChipList = [];
        for (const chip of event.chipsArray) {
            const chipItem = this.chipList.filter((item) => {
                return item.id === chip.id;
            })[0];
            newChipList.push(chipItem);
        }
        this.chipList = newChipList;
        event.isValid = true;
        this.cdr.detectChanges();
    }

    public chipRemoved(event) {
        this.chipList = this.chipList.filter((item) => {
            return item.id !== event.owner.id;
        });
        this.inputBox.valid = IgxInputState.INITIAL;
        this.chipsArea.cdr.detectChanges();
    }

    public selectChip(chipId) {
        const chipToSelect = this.chipsArea.chipsList.toArray().find((chip) => {
            return chip.id === chipId;
        });
        chipToSelect.selected = true;
        this.igxDropDown.close();
    }

    public toggleDropDown(ev) {
        if (!this.dropDownOpened && this.inputBox.value !== null && ev.key.length === 1) {
            this.igxDropDown.open({
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy({
                    target: this.inputBox.nativeElement
                })
            });
            this.dropDownOpened = true;
            this.inputBox.focus();
        }
    }

    public chipMoveStarted() {
        if (this.dropDownOpened) {
            this.igxDropDown.close();
            this.dropDownOpened = false;
        }
    }

    public addEmail() {
        if (this.inputBox.valid === IgxInputState.VALID) {
            let i;
            let exists = false;

            if (
                this.chipList.find(
                    (val) => val.email === this.inputBox.value.toLowerCase()
                ) !== undefined
            ) {
                return;
            }
            for (i = 0; i < this.dropDownList.length; i++) {
                if (
                    this.inputBox.value.toLowerCase() ===
                    this.dropDownList[i].email
                ) {
                    this.chipList.push({
                        email: this.dropDownList[i].email,
                        id: this.dropDownList[i].id,
                        name: this.dropDownList[i].name,
                        photo: this.dropDownList[i].photo,
                        initials: this.dropDownList[i].initials
                    });
                    exists = true;
                }
            }
            if (!exists) {
                this.chipList.push({
                    email: this.inputBox.value,
                    id: this.inputBox.value,
                    name: this.inputBox.value,
                    photo: "https://www.infragistics.com/angular-demos/assets/images/list/empty.png",
                    initials: ''
                });
            }
        }
        this.inputBox.focus();
        this.inputBox.value = "";
        if (this.dropDownOpened) {
            this.igxDropDown.close();
            this.dropDownOpened = false;
        }
        this.inputBox.valid = IgxInputState.INITIAL;
    }

    public openDropDown() {
        if (this.dropDownOpened || !this.igxDropDown.collapsed) {
            return;
        }

        this.igxDropDown.open({
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.inputGroup.element.nativeElement
            })
        });
    }

    public onDropDownOpen() {
        this.dropDownOpened = true;
    }

    public onDropDownClose() {
        this.dropDownOpened = false;
    }

    public itemSelection(ev) {
        if (
            this.chipList.find(
                (val) => val.name === ev.newSelection.elementRef.nativeElement.textContent
            ) !== undefined
        ) {
            return;
        }
        let i;
        for (i = 0; i < this.dropDownList.length; i++) {
            if (
                ev.newSelection.elementRef.nativeElement.textContent ===
                this.dropDownList[i].name || ev.newSelection.elementRef.nativeElement.textContent.substring(2, ev.newSelection.elementRef.nativeElement.textContent.length) ===
                this.dropDownList[i].name
            ) {
                this.chipList.push({
                    email: this.dropDownList[i].email,
                    id: this.dropDownList[i].id,
                    name: this.dropDownList[i].name,
                    photo: this.dropDownList[i].photo,
                    initials: this.dropDownList[i].initials
                });
                this.igxDropDown.close();
                this.dropDownOpened = false;
                this.inputBox.value = "";
                this.inputBox.valid = IgxInputState.INITIAL;
            }
        }
    }

    /**
     * Tags sample
     */

    public chipsOrderChangedCc(event) {
        const newTagList = [];
        for (const chip of event.chipsArray) {
            const chipItem = this.tagList.filter((item) => {
                return item.id === chip.id;
            })[0];
            newTagList.push(chipItem);
        }
        this.tagList = newTagList;
        event.isValid = true;
        this.cdr.detectChanges();
    }

    public selectChipCc(chipId) {
        const chipToSelect = this.chipsAreaCc.chipsList.toArray().find((chip) => {
            return chip.id === chipId;
        });
        if (chipToSelect.selected === true) {
            this.ccGroup.value = this.ccGroup.value.split(", ").filter((z) => {
                return z !== chipToSelect.id;
            }).join(", ");
        } else {
            this.ccGroup.value = this.ccGroup.value.split(", ").filter((z) => {
                return z !== "";
            }).concat(chipToSelect.id).join(", ");
        }
    }

    public chipRemovedCc(event) {
        this.tagList = this.tagList.filter((item) => {
            return item.id !== event.owner.id;
        });
        this.chipsAreaCc.cdr.detectChanges();
    }

    public clear(toast) {
        const body = {
            emails: this.chipList.map(e => e.email),
            content: this.textArea.nativeElement.value
        }

        if (this.ccGroup.value) {
            const tags = this.ccGroup.value.split(',');
            const tagsTrim = tags.map(e => {
                return e.trim();
            })

            if (tagsTrim.includes('All users')) {
                body.emails = this.dropDownList.map(e => e.email)
            }
            else {
                if (tagsTrim.includes('All clients')) {
                    this.dropDownList.forEach(e => {
                        if (e.role == 'client')
                            body.emails.push(e.email);
                    })
                }
                if (tagsTrim.includes('All employees')) {
                    this.dropDownList.forEach(e => {
                        if (e.role == 'emloyee')
                            body.emails.push(e.email);
                    })
                }
                if (tagsTrim.includes('All admins')) {
                    this.dropDownList.forEach(e => {
                        if (e.role == 'admin')
                            body.emails.push(e.email);
                    })
                }

            }



        }
        this.emailService.postEmail(body).toPromise().then(e => {
            this.toastPosition = IgxToastPosition.Middle;
            toast.show();
        })
    }


    public blurHandler() {
        if (this.inputBox.value === "" || this.inputBox.value === null) {
            this.inputBox.valid = IgxInputState.INITIAL;
        }
    }
}


