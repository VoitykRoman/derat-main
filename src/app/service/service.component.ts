import { Component, AfterViewInit } from "@angular/core";
import { Service } from '../models/service.model';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-main-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.css'],
})

export class ServiceComponent implements AfterViewInit  {

    services: Service[] = [{
        title: "Deratization",
        description: `Deradication of rodents that are sources or carriers of communicable diseases (plague, tularemia, and leishmaniasis) and that cause economic losses. Deratization is conducted against mass species of rodents, predominantly of the families Muridae (rats and mice) and Cricetidae (gerbils, voles, and hamsters) that live in inhabited areas, on ships and airplanes, in deserts, steppes, and forests.
        There are two types of deratization: prophylactic and exterminatory. Prophylactic deratization is directed toward depriving rodents of food, drink, and places for building burrows and nests. Toward this end, food products and their wastes are kept in drawers, bins, and cupboards. Windows in basement premises are glassed in or covered with finemeshed metallic screening. Apertures around entry points of electric, gas, water, sewage, and heating conduits are carefully plugged. Ventilating and other openings are covered with metallic screening, and rat runs are cemented or filled with broken glass.
        Exterminatory deratization is obligatory for all enterprises and institutions and must be conducted year-round. It is performed by the prophylactic sections of regional or municipal sanitation-epidemiological stations (SES), on ships by the waterway or port SES, and on animal-breeding farms by the veterinary service. When there are increased numbers of murine rodents, occupying over 50 percent of the populated area, thorough deratization takes place twice a year (February-March and September). Selective deratization is performed when there is frequent infestation of a populated place. In accordance with international agreements, deratization is obligatory on all ships.
        Biological, chemical, and mechanical methods (traps and crushers) are used in deratization. The biological method is based on the use of animals (cats, dogs, and others) and bacterial cultures. The most common method is chemical. Widely used are zookumarin, ratindan, zinc phosphide, and α-naphthylthiourea. Field rodents are exterminated predominantly in the spring, when, owing to insufficient food (fresh vegetation), they readily take bait containing poison or a bacterial culture. In deratization of loaded marine vessels, gas methods (fumigation) are also used—for example, hydrocyanic acid, methyl bromide, and sulfur dioxide.`,
        instruction: `Although your walls may appear solid, many walls are full of tiny pest passageways. Small insects can sneak through the tiniest cracks, so you may not be able to make your home absolutely bug-proof. But you can seal most gaps, especially the larger ones that let in mice and larger insects. Put on some old clothes, as you'll have to get on the ground, slink behind bushes and even crawl under your deck to examine your home's exterior. Take a flashlight and a mirror along. If mice are your main concern, also bring a pencil. If you can slide the pencil into a crack, it's large enough for a young mouse to squeeze through. Take your time and examine every square foot
         of your home. The key areas to inspect include wall penetrations, doors and windows, the foundation, dryer vents, exhaust fans and roof vents`,
        imageUrl: "./assets/5.jpg",
        links: ['Disinsection', "Deodorization", 'Disinfection'],
        priceCalculator: [{
            initialValue: 30,
            perMetr: 3,
            customerType: 'living room',
            title: 'Deratization'
        },
        {
            initialValue: 35,
            perMetr: 4,
            customerType: 'public place',
            title: 'Deratization'
        },
        {
            initialValue: 50,
            perMetr: 4,
            customerType: 'production',
            title: 'Deratization'
        }]
    },
    {
        title: "Disinsection",
        description: `Deradication of rodents that are sources or carriers of communicable diseases (plague, tularemia, and leishmaniasis) and that cause economic losses. Deratization is conducted against mass species of rodents, predominantly of the families Muridae (rats and mice) and Cricetidae (gerbils, voles, and hamsters) that live in inhabited areas, on ships and airplanes, in deserts, steppes, and forests.
        There are two types of deratization: prophylactic and exterminatory. Prophylactic deratization is directed toward depriving rodents of food, drink, and places for building burrows and nests. Toward this end, food products and their wastes are kept in drawers, bins, and cupboards. Windows in basement premises are glassed in or covered with finemeshed metallic screening. Apertures around entry points of electric, gas, water, sewage, and heating conduits are carefully plugged. Ventilating and other openings are covered with metallic screening, and rat runs are cemented or filled with broken glass.
        Exterminatory deratization is obligatory for all enterprises and institutions and must be conducted year-round. It is performed by the prophylactic sections of regional or municipal sanitation-epidemiological stations (SES), on ships by the waterway or port SES, and on animal-breeding farms by the veterinary service. When there are increased numbers of murine rodents, occupying over 50 percent of the populated area, thorough deratization takes place twice a year (February-March and September). Selective deratization is performed when there is frequent infestation of a populated place. In accordance with international agreements, deratization is obligatory on all ships.
        Biological, chemical, and mechanical methods (traps and crushers) are used in deratization. The biological method is based on the use of animals (cats, dogs, and others) and bacterial cultures. The most common method is chemical. Widely used are zookumarin, ratindan, zinc phosphide, and α-naphthylthiourea. Field rodents are exterminated predominantly in the spring, when, owing to insufficient food (fresh vegetation), they readily take bait containing poison or a bacterial culture. In deratization of loaded marine vessels, gas methods (fumigation) are also used—for example, hydrocyanic acid, methyl bromide, and sulfur dioxide.`,
        instruction: `Although your walls may appear solid, many walls are full of tiny pest passageways. Small insects can sneak through the tiniest cracks, so you may not be able to make your home absolutely bug-proof. But you can seal most gaps, especially the larger ones that let in mice and larger insects. Put on some old clothes, as you'll have to get on the ground, slink behind bushes and even crawl under your deck to examine your home's exterior. Take a flashlight and a mirror along. If mice are your main concern, also bring a pencil. If you can slide the pencil into a crack, it's large enough for a young mouse to squeeze through. Take your time and examine every square foot
         of your home. The key areas to inspect include wall penetrations, doors and windows, the foundation, dryer vents, exhaust fans and roof vents`,
        imageUrl: "./assets/6.jpg",
        links: ['Deratization', "Deodorization", 'Disinfection'],
        priceCalculator: [{
            initialValue: 30,
            perMetr: 3,
            customerType: 'living room',
            title: 'Disinsection'
        },
        {
            initialValue: 35,
            perMetr: 4,
            customerType: 'public place',
            title: 'Disinsection'
        },
        {
            initialValue: 50,
            perMetr: 4,
            customerType: 'production',
            title: 'Disinsection'
        }]
    },
    {
        title: "Deodorization",
        description: `Deradication of rodents that are sources or carriers of communicable diseases (plague, tularemia, and leishmaniasis) and that cause economic losses. Deratization is conducted against mass species of rodents, predominantly of the families Muridae (rats and mice) and Cricetidae (gerbils, voles, and hamsters) that live in inhabited areas, on ships and airplanes, in deserts, steppes, and forests.
        There are two types of deratization: prophylactic and exterminatory. Prophylactic deratization is directed toward depriving rodents of food, drink, and places for building burrows and nests. Toward this end, food products and their wastes are kept in drawers, bins, and cupboards. Windows in basement premises are glassed in or covered with finemeshed metallic screening. Apertures around entry points of electric, gas, water, sewage, and heating conduits are carefully plugged. Ventilating and other openings are covered with metallic screening, and rat runs are cemented or filled with broken glass.
        Exterminatory deratization is obligatory for all enterprises and institutions and must be conducted year-round. It is performed by the prophylactic sections of regional or municipal sanitation-epidemiological stations (SES), on ships by the waterway or port SES, and on animal-breeding farms by the veterinary service. When there are increased numbers of murine rodents, occupying over 50 percent of the populated area, thorough deratization takes place twice a year (February-March and September). Selective deratization is performed when there is frequent infestation of a populated place. In accordance with international agreements, deratization is obligatory on all ships.
        Biological, chemical, and mechanical methods (traps and crushers) are used in deratization. The biological method is based on the use of animals (cats, dogs, and others) and bacterial cultures. The most common method is chemical. Widely used are zookumarin, ratindan, zinc phosphide, and α-naphthylthiourea. Field rodents are exterminated predominantly in the spring, when, owing to insufficient food (fresh vegetation), they readily take bait containing poison or a bacterial culture. In deratization of loaded marine vessels, gas methods (fumigation) are also used—for example, hydrocyanic acid, methyl bromide, and sulfur dioxide.`,
        instruction: `Although your walls may appear solid, many walls are full of tiny pest passageways. Small insects can sneak through the tiniest cracks, so you may not be able to make your home absolutely bug-proof. But you can seal most gaps, especially the larger ones that let in mice and larger insects. Put on some old clothes, as you'll have to get on the ground, slink behind bushes and even crawl under your deck to examine your home's exterior. Take a flashlight and a mirror along. If mice are your main concern, also bring a pencil. If you can slide the pencil into a crack, it's large enough for a young mouse to squeeze through. Take your time and examine every square foot
         of your home. The key areas to inspect include wall penetrations, doors and windows, the foundation, dryer vents, exhaust fans and roof vents`,
        imageUrl: "./assets/7.jpg",
        links: ['Disinsection', "Deratization", 'Disinfection'],
        priceCalculator: [{
            initialValue: 30,
            perMetr: 3,
            customerType: 'living room',
            title: 'Deodorization'
        },
        {
            initialValue: 35,
            perMetr: 4,
            customerType: 'public place',
            title: 'Deodorization'
        },
        {
            initialValue: 50,
            perMetr: 4,
            customerType: 'production',
            title: 'Deodorization'
        }]
    },
    {
        title: "Disinfection",
        description: `Deradication of rodents that are sources or carriers of communicable diseases (plague, tularemia, and leishmaniasis) and that cause economic losses. Deratization is conducted against mass species of rodents, predominantly of the families Muridae (rats and mice) and Cricetidae (gerbils, voles, and hamsters) that live in inhabited areas, on ships and airplanes, in deserts, steppes, and forests.
        There are two types of deratization: prophylactic and exterminatory. Prophylactic deratization is directed toward depriving rodents of food, drink, and places for building burrows and nests. Toward this end, food products and their wastes are kept in drawers, bins, and cupboards. Windows in basement premises are glassed in or covered with finemeshed metallic screening. Apertures around entry points of electric, gas, water, sewage, and heating conduits are carefully plugged. Ventilating and other openings are covered with metallic screening, and rat runs are cemented or filled with broken glass.
        Exterminatory deratization is obligatory for all enterprises and institutions and must be conducted year-round. It is performed by the prophylactic sections of regional or municipal sanitation-epidemiological stations (SES), on ships by the waterway or port SES, and on animal-breeding farms by the veterinary service. When there are increased numbers of murine rodents, occupying over 50 percent of the populated area, thorough deratization takes place twice a year (February-March and September). Selective deratization is performed when there is frequent infestation of a populated place. In accordance with international agreements, deratization is obligatory on all ships.
        Biological, chemical, and mechanical methods (traps and crushers) are used in deratization. The biological method is based on the use of animals (cats, dogs, and others) and bacterial cultures. The most common method is chemical. Widely used are zookumarin, ratindan, zinc phosphide, and α-naphthylthiourea. Field rodents are exterminated predominantly in the spring, when, owing to insufficient food (fresh vegetation), they readily take bait containing poison or a bacterial culture. In deratization of loaded marine vessels, gas methods (fumigation) are also used—for example, hydrocyanic acid, methyl bromide, and sulfur dioxide.`,
        instruction: `Although your walls may appear solid, many walls are full of tiny pest passageways. Small insects can sneak through the tiniest cracks, so you may not be able to make your home absolutely bug-proof. But you can seal most gaps, especially the larger ones that let in mice and larger insects. Put on some old clothes, as you'll have to get on the ground, slink behind bushes and even crawl under your deck to examine your home's exterior. Take a flashlight and a mirror along. If mice are your main concern, also bring a pencil. If you can slide the pencil into a crack, it's large enough for a young mouse to squeeze through. Take your time and examine every square foot
         of your home. The key areas to inspect include wall penetrations, doors and windows, the foundation, dryer vents, exhaust fans and roof vents`,
        imageUrl: "./assets/9.jfif",
        links: ['Disinsection', "Deodorization", 'Deratization'],
        priceCalculator: [{
            initialValue: 30,
            perMetr: 3,
            customerType: 'living room',
            title: 'Disinfection'
        },
        {
            initialValue: 35,
            perMetr: 4,
            customerType: 'public place',
            title: 'Disinfection'
        },
        {
            initialValue: 50,
            perMetr: 4,
            customerType: 'production',
            title: 'Disinfection'
        }]
    }]
    i:number = 0;
    /**
     *
     */
    constructor(private router: ActivatedRoute) {
        this.router.queryParamMap.subscribe(i => {
            this.i=+i.get('service');
        })
    }

    ngAfterViewInit() {
        window.scrollTo(0,0);
    }
}
