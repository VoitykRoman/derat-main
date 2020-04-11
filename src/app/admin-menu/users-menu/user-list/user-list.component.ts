import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';
import { UserService } from 'src/app/main/services/user.service';
import { User } from 'src/app/main/models/user.model';

@Component({
    selector: "app-user-list",
    styleUrls: ["./user-list.component.scss"],
    templateUrl: "./user-list.component.html"
})
export class UsersListComponent implements OnInit {
    public searchUser: string;
    public density = "comfortable";
    @Input() users;

    /**
     *
     */
    constructor(private userService: UserService) {
    }
    ngOnInit() {
        this.users.forEach(element => {
            element.fullName = element.firstName + " " + element.lastName
        });

    }

    getInitials(user: User) {
        const first = user.firstName[0].toUpperCase();
        const second = user.lastName[0].toUpperCase();
        return first + second;
    }
    public updateUser(user: User, event) {
        const userToUpdate = {
            userId: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            phone: user.phone
        };

        this.userService.update(userToUpdate).toPromise().then(e => {
            event.dialog.close();
        })
    }
    @Output() onDelete = new EventEmitter<any>();
    deleteUser(id: number) {
        this.userService.delete(id).toPromise().then(e => {

        })
        this.onDelete.emit(id);

    }
    get filterUsers(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "fullName";
        fo.inputValue = this.searchUser;
        return fo;
    }
}