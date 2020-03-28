import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback.model';

@Component({
  selector: 'app-main-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.css']
})

export class FeedbackCardComponent implements OnInit {

  public feedbacks: Feedback[] = [new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg',
    userName: 'Avinash srikantan',
    description: 'Very good service',
    rating: 9
  }),
  new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
    userName: 'Richard Mahoney',
    description: 'Best Derat control service in my life',
    rating: 1
  }),
  new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg',
    userName: 'Donna Price',
    description: 'WTF worst service ever',
    rating: 1
  }),
  new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/women/3.jpg',
    userName: 'Lisa Landers',
    description: 'Mozhe bytu',
    rating: 5
  }),
  new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/women/67.jpg',
    userName: 'Dorothy H. Spencer',
    description: 'Good',
    rating: 6
  }), new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg',
    userName: 'Avinash srikantan',
    description: 'Very good service',
    rating: 9
  }),
  new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
    userName: 'Richard Mahoney',
    description: 'Best Derat control service in my life',
    rating: 10
  }),
  new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg',
    userName: 'Donna Price',
    description: 'WTF worst service ever',
    rating: 1
  }),
  new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/women/3.jpg',
    userName: 'Lisa Landers',
    description: 'Mozhe bytu',
    rating: 5
  }),
  new Feedback({
    avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/women/67.jpg',
    userName: 'Dorothy H. Spencer',
    description: 'Good',
    rating: 6
  })
  ];
  summaryRating: number = 0;
  rating: number;

  constructor(private feedbackService: FeedbackService) {
    this.feedbacks.forEach(f => this.summaryRating += f.rating);
    this.rating = Math.round(this.summaryRating / this.feedbacks.length);
  }

  ngOnInit() {
    this.feedbackService.getFeedbacks().subscribe((feedbacks: Feedback[]) => {
      this.feedbacks = feedbacks;
      this.summaryRating = 0;
      this.feedbacks.forEach(f => this.summaryRating += f.rating);
      this.rating = Math.round(this.summaryRating / this.feedbacks.length);
    })

  }
}