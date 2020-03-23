import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IndexImageService } from '../services/index-image.service';
import { IndexImage } from '../models/index-image.model';

@Component({
    selector: 'app-main-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class CarouselComponent implements OnInit {
    images: string[] = ['./assets/4.jpg'];
    showNavigationIndicators = true;

    constructor(private indexImageService: IndexImageService) {
this.indexImageService.getImages().subscribe((img: IndexImage[]) => {
    this.images = img.map(i => i.imageUrl);
})
    }

    ngOnInit() {
    }
}