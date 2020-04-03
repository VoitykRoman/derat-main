import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from 'src/app/constants/http.base.url.constant';


@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }
  getAllProjects(id: number) {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/projects?id=` + id);
  }

  createProject(body) {
    return this.http.post<any>(`${HttpBaseUrl.httpBaseUrl}/projects`, body);
  }

  changeProjectStatus(id: number, status: string) {
    return this.http.put(`${HttpBaseUrl.httpBaseUrl}/projects/ChangeProjectStatus?id=` + id + '&status=' + status, {});
  }

  getProjectById(id: number) {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/projects/GetProjectById?id=` + id);
  }

  removeEmployeeFromProject(employeeId: number, projectId: number) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/projects/removeEmployeeFromProject?employeeId=` + employeeId + `&projectId=` + projectId, {});
  }

  addEmployeesToProject(body) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/projects/AddEmployeeToProject`, body);
  }

  deleteProject(id: number) {
    return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/projects/DeleteProject?id=` + id);
  }
}
