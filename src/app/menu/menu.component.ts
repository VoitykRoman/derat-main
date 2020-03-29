import { Component, OnInit } from '@angular/core';
import { MenuReference } from '../models/menu-reference';
import { Router } from '@angular/router';

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
    }
    ]
    zoom() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    constructor(private router: Router) {
    }
    redirectToHome() {
        this.router.navigate(['']);
    }
    redirectToContacts() {
        if(this.router.url.split('?')[0] == '/'){
            document.getElementById('contacts').scrollIntoView({block: "start", behavior: "smooth"});
        }

        this.router.navigate([''], {
            queryParams: {
                id: 'contacts'
            }
        });


    }
}

