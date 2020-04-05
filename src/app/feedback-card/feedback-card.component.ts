import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback.model';

@Component({
  selector: 'app-main-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.css']
})

export class FeedbackCardComponent implements OnInit {

  public feedbacks: Feedback[];
  summaryRating: number = 0;
  rating: number;

  constructor(private feedbackService: FeedbackService) {
  }
  obs;
  ngOnInit() {
    this.obs = this.feedbackService.getFeedbacks().toPromise();
    this.feedbackService.getFeedbacks().toPromise().then((feedbacks: Feedback[]) => {
      this.feedbacks = feedbacks;
      this.summaryRating = 0;
      this.feedbacks.forEach(f => this.summaryRating += f.rating);
      this.rating = Math.round(this.summaryRating / this.feedbacks.length);
    })

  }
}