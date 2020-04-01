import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from 'src/app/constants/http.base.url.constant';


@Injectable()
export class OrganizationsService {

    constructor(private http: HttpClient) { }
    getAllOrganizations() {
      return  this.http.get(`${HttpBaseUrl.httpBaseUrl}/organizations`);
    }
    createOrganization(organization) {
      return  this.http.post(`${HttpBaseUrl.httpBaseUrl}/organizations`, organization);
    }
}