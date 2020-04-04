import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';

@Injectable()
export class TeamMemberService {

  constructor(private http: HttpClient) { }

  getTeamMembers() {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/TeamMembers`);
  }

  deleteTeamMember(id: number) {
    return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/TeamMembers?id=` + id);
  }

  updateTeamMember(teamMember) {
    return this.http.put(`${HttpBaseUrl.httpBaseUrl}/TeamMembers`, teamMember);
  }

  createTeamMember(teamMember) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/TeamMembers`, teamMember);
  }
}