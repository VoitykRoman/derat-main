import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';

@Injectable()
export class FeedbackService {

  constructor(private http: HttpClient) { }
  getFeedbacks() {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/Feedbacks`);
  }
  postFeedback(body) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/Feedbacks`, body);
  }
  getFeedackByUserId(id) {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/Feedbacks/` + id);
  }
  deleteFeedback(id) {
    return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/Feedbacks?id=` + id);
  }
}