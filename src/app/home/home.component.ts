import { Component, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-main-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements AfterViewInit {

    constructor(private router: ActivatedRoute) {
    }

    id: string;

    ngAfterViewInit() {
        this.router.queryParamMap.subscribe(param => {
            this.id = param.get('id');
        })
        document.getElementById(this.id).scrollIntoView();

    }

}
