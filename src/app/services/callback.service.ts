import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';
import { CallBack } from '../models/callback.model';

@Injectable()
export class CallBackService {

    constructor(private http: HttpClient) { }
    postCallBack(body) {
        return this.http.post(`${HttpBaseUrl.httpBaseUrl}/callbacks`, body);
    }

    getAll() {
        return this.http.get(`${HttpBaseUrl.httpBaseUrl}/callbacks`);
    }

    delete(id: number) {
        return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/callbacks?id=` + id);
    }
}
