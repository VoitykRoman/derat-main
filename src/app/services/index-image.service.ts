import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';

@Injectable()
export class IndexImageService {

    constructor(private http: HttpClient) { }

    getImages() {
      return  this.http.get(`${HttpBaseUrl.httpBaseUrl}/IndexImage`);
    }
}