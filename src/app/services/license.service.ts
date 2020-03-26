import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';

@Injectable()
export class LicenseService {

    constructor(private http: HttpClient) { }

    getLicenses() {
      return  this.http.get(`${HttpBaseUrl.httpBaseUrl}/licenses`);
    }
}