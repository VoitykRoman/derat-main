import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IndexImageService {

    constructor(private http: HttpClient) { }

    getImages() {
      return  this.http.get('http://localhost:5000/IndexImage');
    }
}