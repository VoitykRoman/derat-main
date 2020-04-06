import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/main/models/user.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { Base64Service } from 'src/app/shared/base64.service';
import { UserService } from 'src/app/main/services/user.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html"
})

export class ProfileComponent implements OnInit {

  user: User;
  initials: string;
  selectedFile;
  constructor(public authenticationService: AuthenticationService,
    private base64Service: Base64Service,
    private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    const first = this.user.firstName[0].toUpperCase();
    const second = this.user.lastName[0].toUpperCase();
    this.initials = first + second;
  }

  isAdmin() {
    return this.user?.role == "admin";
  }
  isClient() {
    return this.user?.role == "client";
  }
  isEmployee() {
    return this.user?.role == "employee";
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    let u = URL.createObjectURL(this.selectedFile);
    this.base64Service.toDataURL(u)
      .then(dataUrl => {
        this.user.avatarUrl = <string>dataUrl;
      })
  }

  updateUser(event) {
    const userToUpdate = {
      email: this.user.email,
      password: this.user.password,
      userId: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      phone: this.user.phone,
      avatarUrl: this.user.avatarUrl
    }
    this.userService.update(userToUpdate).toPromise().then(e => {
      event.dialog.close();
      let loggedUser = JSON.parse(localStorage.getItem('currentUser'));
      loggedUser.email = this.user.email;
      loggedUser.password = this.user.password;
      loggedUser.firstName = this.user.firstName;
      loggedUser.lastName = this.user.lastName;
      loggedUser.phone = this.user.phone;
      loggedUser.avatarUrl = this.user.avatarUrl;
      localStorage.removeItem('currentUser');
      localStorage.setItem('currentUser', JSON.stringify(loggedUser));
    })

  }
}