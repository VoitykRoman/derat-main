import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerimeterService } from '../services/perimeters.service';
import { Perimeter } from '../models/Perimeter.model';
import { Trap } from '../models/trap.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
    selector: "app-perimeters",
    templateUrl: "./perimeters.component.html"
})
export class PerimetersComponent implements OnInit {

    obs;
    perimeter: Perimeter;
    loading = true;
    page = 1;
    pageSize = 2;
    constructor(private route: ActivatedRoute,
        private perimeterService: PerimeterService,
        public authenticationService: AuthenticationService) {
    }

    ifStatus() {
        return this.perimeter.service != 'Deratization'
    }
    ngOnInit() {
        const perimeterId = +this.route.snapshot.paramMap.get('id');
        this.obs = this.perimeterService.getPerimeterById(perimeterId);
        const perimeterPromise = this.perimeterService.getPerimeterById(perimeterId).toPromise();
        perimeterPromise.then((e: Perimeter) => {
            this.perimeter = e;
            this.loading = false;
        });
    }

    markAsReviewed() {
        this.perimeterService.markAsReviewed(this.perimeter.id).toPromise().then(e => {
            location.reload();
        })
    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }


    get pagination(): Trap[] {
        return this.perimeter.traps
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
}