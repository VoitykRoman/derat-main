import { Component, HostListener, Inject } from '@angular/core';
import { Card } from '../models/service-card.model';

@Component({
    selector: 'app-main-services-cards',
    templateUrl: './services-cards.component.html',
    styleUrls: ['./services-cards.component.css']
})

export class ServicesCardsComponent{
cards: Card[] = [new Card({
    buttons: ["read more"],
    content: `New York City comprises 5 boroughs sitting where the
              Hudson River meets the Atlantic Ocean. At its core is Manhattan,
              a densely populated borough that’s among the world’s major commercial,
              financial and cultural centers.`,
    icons: ["favorite", "share"],
    imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg",
    subtitle: "City in New York",
    title: "Deratization"
}), new Card({
    buttons: ["read more"],
    content: `New York City comprises 5 boroughs sitting where the
              Hudson River meets the Atlantic Ocean. At its core is Manhattan,
              a densely populated borough that’s among the world’s major commercial,
              financial and cultural centers.`,
    icons: ["favorite", "share"],
    imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg",
    subtitle: "City in New York",
    title: "Disinsection"
}), new Card({
    buttons: ["read more"],
    content: `New York City comprises 5 boroughs sitting where the
              Hudson River meets the Atlantic Ocean. At its core is Manhattan,
              a densely populated borough that’s among the world’s major commercial,
              financial and cultural centers.`,
    icons: ["favorite", "share"],
    imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg",
    subtitle: "City in New York",
    title: "Deodorization"
}),
new Card({
    buttons: ["read more"],
    content: `New York City comprises 5 boroughs sitting where the
              Hudson River meets the Atlantic Ocean. At its core is Manhattan,
              a densely populated borough that’s among the world’s major commercial,
              financial and cultural centers.`,
    icons: ["favorite", "share"],
    imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg",
    subtitle: "City in New York",
    title: "Disinfection"
})];
}