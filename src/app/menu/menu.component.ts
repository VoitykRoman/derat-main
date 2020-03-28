import { Component, OnInit } from '@angular/core';
import { MenuReference } from '../models/menu-reference';

@Component({
    selector: 'app-main-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {

    aboutUsReferences: MenuReference[] = [{
        title: "Our team",
        link: "https://github.com/VoitykRoman"
    },
    {
        title: "Our licenses",
        link: "https://github.com/VoitykRoman"
    }];
servicesReferences: MenuReference[] = [{
    title: 'Deratization',
    link: 'https://translate.google.com/?hl=uk'
},
{
    title: 'Disinsection',
    link: 'https://learn.javascript.ru'
},
{
    title: 'Deodorization',
    link: 'https://translate.google.com/?hl=uk'
},
{
    title: 'Disinfection',
    link: 'https://translate.google.com/?hl=uk'
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
   
}
