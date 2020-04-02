import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from 'src/app/constants/http.base.url.constant';


@Injectable()
export class OrganizationsService {

  constructor(private http: HttpClient) { }
  getAllOrganizations() {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/organizations`);
  }
  createOrganization(organization) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/organizations`, organization);
  }

  getOrganizationById(id: number) {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/organizations/GetOrganizationById?id=` + id);
  }

  deleteFacility(id: number) {
    return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/organizations/DeleteFacility?id=` + id);
  }

  removeClient(clientId: number, organizationId: number) {
    return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/organizations/removeclient?clientId=` + clientId + '&organizationId=' + organizationId);
  }

  addClient(body) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/organizations/addclient`, body);
  }
}