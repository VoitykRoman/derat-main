import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from 'src/app/constants/http.base.url.constant';

@Injectable()
export class TrapService {

  constructor(private http: HttpClient) { }
  getAllTraps() {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/traps`);
  }
  createTrap(facility) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/traps`, facility);
  }

  getTrapById(id: number) {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/traps/GetTrapById?id=` + id);
  }

  deleteTrap(id:number){
    return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/traps/DeleteTrap?id=` + id);
  }

  markAsReviewed(id:number){
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/traps/MarkAsReviewed?id=` + id,{});
  }
}