import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';
import { CallBack } from '../models/callback.model';

@Injectable()
export class CallBackService {

    constructor(private http: HttpClient) { }
    postCallBack(body: CallBack) {
        return this.http.post<CallBack>(`${HttpBaseUrl.httpBaseUrl}/callbacks`, body);
    }
}
