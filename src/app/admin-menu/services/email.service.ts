import { HttpBaseUrl } from 'src/app/constants/http.base.url.constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

    constructor(private http: HttpClient) { }
    postEmail(body) {
        return this.http.post(`${HttpBaseUrl.httpBaseUrl}/email`, body);
    }

    SendEmailToSupport(body) {
        return this.http.post(`${HttpBaseUrl.httpBaseUrl}/email/SendEmailToSupport`, body);
    }
}