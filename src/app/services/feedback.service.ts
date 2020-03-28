import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';

@Injectable()
export class FeedbackService {

    constructor(private http: HttpClient) { }
    getFeedbacks() {
      return  this.http.get(`${HttpBaseUrl.httpBaseUrl}/Feedbacks`);
    }
}