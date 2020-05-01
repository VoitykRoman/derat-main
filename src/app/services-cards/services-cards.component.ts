import { Component } from '@angular/core';
import { Card } from '../models/service-card.model';
import { TranslateService } from '../services/translate.service';

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
    to remove volatile, odoriferous materials present in edible fats and oils. And also remove bad smell from any area.`,
    icons: ["favorite", "share"],
    imageUrl: "assets/7.jpg",
    subtitle: "DeratControl",
    title: "Deodorization"
}),
new Card({
    buttons: ["read more"],
    content: `Disinfection measures are carried out at enterprises of food products 
    production, supermarkets, food outlets, apartments, offices, premises, stores, streets any infection or disease.`,
    icons: ["favorite", "share"],
    imageUrl: "assets/9.jfif",
    subtitle: "DeratControl",
    title: "Disinfection"
})];

cardsUa: Card[] = [new Card({
    buttons: ["Детальніше"],
    content: `Комплекс заходів щодо дератизації означає не тільки знищення гризунів, але також запобігання їх виникненню щури є джерелом інфекційних захворювань. `,
    icons: ["favorite", "share"],
    imageUrl: "assets/5.jpg",
    subtitle: "DeratControl",
    title: "Дератизація"
}), new Card({
    buttons: ["Детальніше"],
    content: `Служба дезінсекції включає комплекс заходів, спрямованих на знищення та запобігання появі багатьох різних комах (мух, гострих, тарганів, комарів, бліх, клопів).`,
    icons: ["favorite", "share"],
    imageUrl: "assets/6.jpg",
    subtitle: "DeratControl",
    title: "Дезінсекція"
}), new Card({
    buttons: ["Детальніше"],
    content: `Дезодорація - високотемпературний, вакуумний пародистиляційний процес для видалення запашних речовин, присутніх у харчових жирах. Також видалити неприємний запах.`,
    icons: ["favorite", "share"],
    imageUrl: "assets/7.jpg",
    subtitle: "DeratControl",
    title: "Деодорація"
}),
new Card({
    buttons: ["Детальніше"],
    content: `Заходи з дезінфекції проводяться на підприємствах виробництва харчових продуктів, супермаркетах, квартирах, офісах, магазинах, на вулицях будь-якої інфекції чи захворювання.`,
    icons: ["favorite", "share"],
    imageUrl: "assets/9.jfif",
    subtitle: "DeratControl",
    title: "Дезінфекція"
})];

/**
 *
 */
constructor(public translateService: TranslateService) {


}
sw(){
   if(window.innerWidth <= 450)
   return 1;

   if(window.innerWidth < 1080 && window.innerWidth > 450)
   return 2;

   if(window.innerWidth >= 1080)
   return 3;


}
}