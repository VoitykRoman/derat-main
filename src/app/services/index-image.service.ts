import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseUrl } from '../constants/http.base.url.constant';

@Injectable()
export class IndexImageService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get(`${HttpBaseUrl.httpBaseUrl}/IndexImage`);
  }

  deleteindexImage(id: number) {
    return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/indeximage?id=` + id);
  }

  updateIndexImage(indexImage) {
    return this.http.put(`${HttpBaseUrl.httpBaseUrl}/indeximage`, indexImage);
  }

  createNewIndexImage(indexImage) {
    return this.http.post(`${HttpBaseUrl.httpBaseUrl}/indeximage`, indexImage);
  }
}