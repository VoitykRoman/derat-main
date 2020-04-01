import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { HttpBaseUrl } from 'src/app/constants/http.base.url.constant';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${HttpBaseUrl.httpBaseUrl}/users/getusers`);
    }

    getById(id: number) {
        return this.http.get(`${HttpBaseUrl.httpBaseUrl}/users/GetUserById` + id);
    }

    register(user: User) {
        return this.http.post(`${HttpBaseUrl.httpBaseUrl}/users/createuser`, user);
    }

    update(user: User) {
        return this.http.put(`${HttpBaseUrl.httpBaseUrl}/users/updateuser/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${HttpBaseUrl.httpBaseUrl}/users/DeleteUser` + id);
    }

    getUserseByRole(role: string){
        return this.http.get(`${HttpBaseUrl.httpBaseUrl}/users/GetUsersByRole?role=`+role);
    }

    getUser(email:string, password: string){
        return this.http.get(`${HttpBaseUrl.httpBaseUrl}/users/GetUser?email=${email}&password=${password}`);
    }

    getAllEmployee(){
        return this.http.get(`${HttpBaseUrl.httpBaseUrl}/users/GetAllEmployees`);
    }

    getAllClients(){
        return this.http.get(`${HttpBaseUrl.httpBaseUrl}/users/GetAllClients`);
    }
}