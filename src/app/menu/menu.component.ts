import { Component, OnInit } from '@angular/core';
import { MenuReference } from '../models/menu-reference';
import { Router } from '@angular/router';
import { AuthenticationService } from '../main/services/authentication.service';
import { User } from '../main/models/user.model';

@Component({
    selector: 'app-main-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {

    aboutUsReferences: MenuReference[] = [{
        title: "Our team",
        link: "team",
        isService: false
    },
    {
        title: "Our licenses",
        link: "licenses",
        isService: false
    }];
    servicesReferences: MenuReference[] = [{
        title: 'Deratization',
        link: '0',
        isService: true
    },
    {
        title: 'Disinsection',
        link: '1',
        isService: true
    },
    {
        title: 'Deodorization',
        link: '2',
        isService: true
    },
    {
        title: 'Disinfection',
        link: '3',
        isService: true
    }]
    currentUser: User;

    constructor(private router: Router, public authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(u => {
            this.currentUser = u;
        })

    }
    isAdmin() {
        return this.currentUser?.role == "admin";
    }

    logout() {
        this.authenticationService.logout();
        location.href = '#home';
    }

    //redirects
    redirectToHome() {
        if (this.router.url.split('?')[0] == '/') {
           document.getElementById('home').scrollIntoView({ block: "start", behavior: "smooth" });
            console.log(this.router.url);
        }
        else {
            this.router.navigate(['']);
        }
    }
    redirectToContacts() {
        if (this.router.url.split('?')[0] == '/') {
            document.getElementById('contacts').scrollIntoView({ block: "start", behavior: "smooth" });
        }

        this.router.navigate([''], {
            queryParams: {
                id: 'contacts'
            }
        });
    }

    redirectToLogin() {
        this.router.navigate(['/login']);
    }

    redirectToAdminMenu() {
        this.router.navigate(['/menu']);
    }

    //zoom
    zoom() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

}

