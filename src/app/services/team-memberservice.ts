import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamMemberService {

    constructor(private http: HttpClient) { }

    getTeamMembers() {
      return  this.http.get('http://localhost:5000/TeamMembers');
    }
}