import { Component, OnInit, Input } from "@angular/core";
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: "app-main-feedback-list",
  styleUrls: ["./feedback-list.component.scss"],
  templateUrl: "./feedback-list.component.html"
})

export class FeedbackListComponent implements OnInit {

  @Input() public feedbacksResult: Feedback[];
  public density = "comfortable";
  page = 1;
  pageSize = 2;
  /**
   *
   */
  constructor(private feedbackService: FeedbackService,
    public translateService: TranslateService) {

  }
  public ngOnInit() {
    this.feedbackService.getFeedbacks().subscribe((feedbacks: Feedback[]) => {
      this.feedbacksResult = feedbacks;
    })
  }

  get feedbacks(): Feedback[] {
    return this.feedbacksResult
      .map((feedback, i) => ({ id: i + 1, ...feedback }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
