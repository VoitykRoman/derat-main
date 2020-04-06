import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/main/services/user.service';
import { User } from 'src/app/main/models/user.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-users-menu",
    styleUrls: ["./users-menu.component.scss"],
    templateUrl: "./users-menu.component.html"
})
export class UsersMenuComponent implements OnInit {

    users: User[];
    loading = true;
    constructor(private userService: UserService,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.userService.getAll().toPromise().then((e: User[]) => {
            this.users = e;
            this.loading = false;
        })
    }

    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin';
    }

    get clients() {
        return this.users.filter(e => e.role == 'client');
    }
    get admins() {
        return this.users.filter(e => e.role == 'admin');
    }
    get employees() {
        return this.users.filter(e => e.role == 'employee');
    }
}