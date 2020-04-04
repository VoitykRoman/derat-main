import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/main/services/user.service';
import { User } from 'src/app/main/models/user.model';

@Component({
    selector: "app-users-menu",
    styleUrls: ["./users-menu.component.scss"],
    templateUrl: "./users-menu.component.html"
})
export class UsersMenuComponent implements OnInit {

    users: User[]
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getAll().toPromise().then((e: User[]) => {
            this.users = e;
        })
    }

    get clients() {
        return this.users.filter(e => e.role =='client');
    }
    get admins() {
        return this.users.filter(e => e.role =='admin');
    }
    get employees() {
        return this.users.filter(e => e.role =='employee');
    }
}