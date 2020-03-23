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
    content: `The complex of measures for deratization means not only the destruction of rodents, 
    but also the prevention of their occurrence, rats are the source infectious diseases. `,
    icons: ["favorite", "share"],
    imageUrl: "assets/5.jpg",
    subtitle: "DeratControl",
    title: "Deratization"
}), new Card({
    buttons: ["read more"],
    content: `The service of desinsection includes the complex of measures directed on destruction and 
    prevention the occurrence of insects (flies, acrid, cockroaches, mosquitos, fleas, bugs).`,
    icons: ["favorite", "share"],
    imageUrl: "assets/6.jpg",
    subtitle: "DeratControl",
    title: "Disinsection"
}), new Card({
    buttons: ["read more"],
    content: `Deodorization is a high-temperature, high-vacuum steam-distillation process 
    to remove volatile, odoriferous materials present in edible fats and oils.`,
    icons: ["favorite", "share"],
    imageUrl: "assets/7.jpg",
    subtitle: "DeratControl",
    title: "Deodorization"
}),
new Card({
    buttons: ["read more"],
    content: `Disinfection measures are carried out at enterprises of food products 
    production, supermarkets, food outlets, apartments and offices and its premises, stores`,
    icons: ["favorite", "share"],
    imageUrl: "assets/9.jfif",
    subtitle: "DeratControl",
    title: "Disinfection"
})];
}