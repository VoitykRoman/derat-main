import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
    selector: "app-left-feedback",
    styleUrls: ["./left-feedback.component.scss"],
    templateUrl: "./left-feedback.component.html"
})

export class LeftFeedbackComponent implements OnInit {
    selected = 0;
    hovered = 0;
    deletable = false;
    loading = true;
    feedback: Feedback = {
        id: undefined,
        rating: 10,
        description: '',
        userName: ''
    }
    constructor(private authenticationService: AuthenticationService,
        private feedbackService: FeedbackService) {

    }

    ngOnInit() {
      this.downloadData();
    }
    downloadData() {
        this.feedbackService
        .getFeedackByUserId(this.authenticationService.currentUserValue.id)
        .toPromise().then((e: Feedback) => {
            if (e) {
                this.feedback = e;
                this.deletable = true;
                this.loading = false;
            }
            this.loading = false;
        })
    }
    onSubmit() {
        const body = {
            userName: this.authenticationService.currentUserValue.firstName + ' ' + this.authenticationService.currentUserValue.lastName,
            description: this.feedback.description,
            rating: this.feedback.rating,
            userId: this.authenticationService.currentUserValue.id
        }
        this.feedbackService.postFeedback(body).toPromise().then(e => {
            this.loading = true;
            this.downloadData();
        })
    }

    delete() {
        this.feedbackService.deleteFeedback(this.feedback.id).toPromise().then(e => {
            
        })
        this.deletable = false;
        this.feedback.description = ''
    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }
}