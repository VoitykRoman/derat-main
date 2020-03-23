import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndexImage } from '../models/index-image.model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IndexImageService {

    constructor(private http: HttpClient) { }

    getImages() {
      return  this.http.get('http://localhost:5000/IndexImage');
    }
}