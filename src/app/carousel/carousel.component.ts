import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IndexImageService } from '../services/index-image.service';
import { IndexImage } from '../models/index-image.model';
import { IgxCarouselComponent } from 'igniteui-angular';

@Component({
    selector: 'app-main-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss', './carousel.component.scss'],
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class CarouselComponent implements OnInit {
    @ViewChild("carousel", { static: true }) public carousel: IgxCarouselComponent;
    public animations = ["slide", "fade", "none"];
    loading = true;
    images: IndexImage[];
    showNavigationIndicators = true;

    constructor(private indexImageService: IndexImageService) {
    }

    ngOnInit() {
        this.indexImageService.getImages().subscribe((img: IndexImage[]) => {
            this.images = img;
            this.loading = false;
        })
    }
}