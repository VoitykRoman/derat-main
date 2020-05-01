import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerimeterService } from '../services/perimeters.service';
import { Perimeter } from '../models/perimeter.model';
import { Trap } from '../models/trap.model';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { IgxFilterOptions } from 'igniteui-angular';
import { TranslateService } from 'src/app/services/translate.service';

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
    searchTrap;
    constructor(private route: ActivatedRoute,
        private perimeterService: PerimeterService,
        public authenticationService: AuthenticationService,
        public translateService: TranslateService ) {
    }

    ifStatus() {
        return this.perimeter.service != 'Deratization' &&  this.perimeter.service != 'Дератизація'
    }
    ngOnInit() {
        this.downloadData();
    }
    downloadData() {
        const perimeterId = +this.route.snapshot.paramMap.get('id');
        this.obs = this.perimeterService.getPerimeterById(perimeterId);
        const perimeterPromise = this.perimeterService.getPerimeterById(perimeterId).toPromise();
        perimeterPromise.then((e: Perimeter) => {
            this.perimeter = e;
            this.loading = false;
        });
    }
    
    onDelete(id) {
        this.perimeter.traps = this.perimeter.traps.filter(e => e.id != id);
    }
    onCreate() {
        this.loading = true;
        this.downloadData();
    }
    markAsReviewed() {
        this.perimeterService.markAsReviewed(this.perimeter.id).toPromise().then(e => {
            this.loading = true;
            this.downloadData();
        })
    }
    isAdmin() {
        return this.authenticationService.currentUserValue.role == 'admin'
    }

    isClient() {
        return this.authenticationService.currentUserValue.role == 'client'
    }

    get filterTraps(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = "place";
        fo.inputValue = this.searchTrap;
        return fo;
    }

    get pagination(): Trap[] {
        return this.perimeter.traps
            .map((feedback, i) => ({ id: i + 1, ...feedback }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
}