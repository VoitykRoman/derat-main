import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-feedback-rating',
  templateUrl: './feedback-rating.component.html'
})
export class FeedbackRatingComponent {
  @Input() rating ;
  readonly = true;
}
