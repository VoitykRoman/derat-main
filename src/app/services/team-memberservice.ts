import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';

@Injectable()
export class TeamMemberService {

    constructor(private http: HttpClient) { }

    getTeamMembers() {
      return  this.http.get(`${HttpBaseUrl.httpBaseUrl}/TeamMembers`);
    }
}