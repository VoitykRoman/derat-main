import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from 'src/app/constants/http.base.url.constant';

@Injectable()
export class PerimeterService {

    constructor(private http: HttpClient) { }
    getAllPerimeters() {
        return this.http.get(`${HttpBaseUrl.httpBaseUrl}/perimeters`);
    }
    createPerimeter(perimeter) {
        return this.http.post(`${HttpBaseUrl.httpBaseUrl}/perimeters`, perimeter);
    }
    getPerimeterById(id: number) {
        return this.http.get(`${HttpBaseUrl.httpBaseUrl}/perimeters/GetPerimeterById?id=` + id);
    }
    markAsReviewed(id: number) {
        return this.http.post(`${HttpBaseUrl.httpBaseUrl}/perimeters/MarkAsReviewed?id=` + id, {});
    }

    deletePerimeter(id: number) {
        return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/perimeters/DeletePerimeter?id=` + id);
    }
}