import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { EmailService } from '../services/email.service';

@Component({
    selector: "app-support",
    templateUrl: "./support.component.html"
})

export class SupportComponent implements OnInit {

    content;
    loading = true;
    constructor(private authenticationService: AuthenticationService,
        private emailService: EmailService) {
    }

    ngOnInit() {
this.loading = false;
    }
    onSubmit() {
        const body = {
            content: this.content,
            fullName: this.authenticationService.currentUserValue.firstName + " " + this.authenticationService.currentUserValue.lastName,
            userId: this.authenticationService.currentUserValue.id,
            role: this.authenticationService.currentUserValue.role
        }
        this.emailService.SendEmailToSupport(body).toPromise().then(e => {
            this.content = ''
        })
    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin';
    }
}
