import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from 'src/app/constants/http.base.url.constant';


@Injectable()
export class FacilityService {

  constructor(private http: HttpClient) { }
  getAllFacilities() {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/facilities`);
  }
  createFacility(facility) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/facilities`, facility);
  }

  getFacilityById(id: number) {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/facilities/GetFacilityById?id=` + id);
  }
}