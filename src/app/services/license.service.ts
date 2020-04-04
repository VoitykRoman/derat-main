import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';

@Injectable()
export class LicenseService {

    constructor(private http: HttpClient) { }

    getLicenses() {
      return  this.http.get(`${HttpBaseUrl.httpBaseUrl}/licenses`);
    }

    deleteLicense(id: number) {
      return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/licenses?id=` + id);
    }
  
    updateLicense(license) {
      return this.http.put(`${HttpBaseUrl.httpBaseUrl}/licenses`, license);
    }
  
    createNewLicense(license) {
      return this.http.post(`${HttpBaseUrl.httpBaseUrl}/licenses`, license);
    }
}